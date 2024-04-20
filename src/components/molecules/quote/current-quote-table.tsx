import QuoteTableData from '@/components/atoms/quote/quote-table-data';
import QuoteTableTitle from '@/components/atoms/quote/quote-table-title';
import { CurrentQuoteDetailsType } from '@/types/globalTypes';
import { extractCurrentQuoteDetails } from '@/utils';

type Props = { currentQuote: CurrentQuoteDetailsType };

const CurrentQuoteTable = ({ currentQuote }: Props) => {
  const details = extractCurrentQuoteDetails(currentQuote);
  return (
    <div>
      <QuoteTableTitle title='Current Quote' />
      <div className='mt-4 grid grid-cols-2 grid-rows-4 gap-4 px-3'>
        {details.map((detail, index) => (
          <QuoteTableData
            key={index}
            label={detail.label}
            value={String(detail.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentQuoteTable;
