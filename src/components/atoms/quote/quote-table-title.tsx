import { convertString } from '@/utils/convertString';

type Props = { title: string };

const QuoteTableTitle = ({ title }: Props) => {
  return (
    <div className='bg-itsmygroup rounded-lg py-2'>
      <p className='pl-3 text-lg font-bold text-white'>
        {convertString('underscore_to_title', title)}
      </p>
    </div>
  );
};

export default QuoteTableTitle;
