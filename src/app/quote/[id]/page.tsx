'use client';
import Loading from '@/components/@global/feedback/loading';
import QuoteResultContainer from '@/components/orgainisms/quote/quote-result-container';
import QuoteTemplate from '@/components/template/quote-template';
import { QuoteDetailsType } from '@/types/globalTypes';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = { params: { id: string } };

const QuotePageWithId = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [quoteData, setQuoteData] = useState<QuoteDetailsType>(null);
  useEffect(() => {
    fetchQuote();
  }, []);
  const fetchQuote = async () => {
    try {
      const url = `https://staging.itsmy.com.au/api/crm/quote/${params.id}/AIATestQuote/?use_internal_id=true&return_application_link=true`;
      const config = {
        headers: {
          Authorization:
            'Token a427f80ffd6eeee762526d701c32f02277a0d376dd2d66cf1719d72642e6859e',
        },
      };
      const response = await axios.get(url, config);
      if (response.data) {
        const { current_quote, partner } = response.data;
        setQuoteData({
          current_quote: { ...current_quote },
          partner: { ...partner },
        });
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <QuoteTemplate>
      {' '}
      <div className='mt-5 flex flex-col items-center'>
        {isLoading ? (
          <Loading />
        ) : (
          <QuoteResultContainer quoteData={quoteData} />
        )}
      </div>
    </QuoteTemplate>
  );
};

export default QuotePageWithId;
