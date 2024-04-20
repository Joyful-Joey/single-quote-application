import BrandName from '@/components/@global/data-display/brand-name';
import Spacer from '@/components/@global/layout/spacer';
import GoBackButton from '@/components/atoms/quote/go-back-button';

type Props = {};

const QuoteHeader = (props: Props) => {
  return (
    <header className='flex flex-row justify-between border-b-2 p-3'>
      <GoBackButton />
      <BrandName className='text-xl' />
      <Spacer />
    </header>
  );
};

export default QuoteHeader;
