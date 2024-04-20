import ErrorAlert from '@/components/@global/feedback/error-alert';
import CurrentQuoteTable from '@/components/molecules/quote/current-quote-table';
import PartnerTable from '@/components/molecules/quote/partner-table';
import { QuoteDetailsType } from '@/types/globalTypes';

type Props = {
  quoteData: QuoteDetailsType;
};

const QuoteResultTable = ({ quoteData }: Props) => {
  // First check if quoteData is not null
  if (!quoteData) {
    return <ErrorAlert message='No Quote Data!' className='mt-5' />;
  }
  const { current_quote, partner } = quoteData;
  return (
    <div>
      {current_quote && <CurrentQuoteTable currentQuote={current_quote} />}
      {partner && <PartnerTable partner={partner} />}
    </div>
  );
};

export default QuoteResultTable;
