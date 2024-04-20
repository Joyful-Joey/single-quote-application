import BrandName from '@/components/@global/data-display/brand-name';
import QuoteForm from '@/components/molecules/home/quote-form';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-y-10'>
      <BrandName className='text-5xl' />
      <QuoteForm />
    </div>
  );
};

export default Home;
