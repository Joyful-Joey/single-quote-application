import QuoteTableData from '@/components/atoms/quote/quote-table-data';
import QuoteTableTitle from '@/components/atoms/quote/quote-table-title';
import { PartnerDetailsType } from '@/types/globalTypes';
import { extractPartnerDetails } from '@/utils';

type Props = {
  partner: PartnerDetailsType;
};

const PartnerTable = ({ partner }: Props) => {
  const details = extractPartnerDetails(partner);
  return (
    <div className='mt-4'>
      <QuoteTableTitle title='Partner' />
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

export default PartnerTable;
