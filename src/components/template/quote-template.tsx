import QuoteHeader from '../orgainisms/quote/header';

type Props = {
  children: React.ReactNode;
};

const QuoteTemplate = ({ children }: Props) => {
  return (
    <div>
      <QuoteHeader />
      {children}
    </div>
  );
};

export default QuoteTemplate;
