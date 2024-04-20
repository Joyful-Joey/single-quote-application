import ErrorAlert from '@/components/@global/feedback/error-alert';
import QuoteTemplate from '@/components/template/quote-template';

type Props = {};

const QuotePageWithoutId = (props: Props) => {
  return (
    <QuoteTemplate>
      <ErrorAlert message='Wrong Access!' className='mt-5' />
    </QuoteTemplate>
  );
};

export default QuotePageWithoutId;
