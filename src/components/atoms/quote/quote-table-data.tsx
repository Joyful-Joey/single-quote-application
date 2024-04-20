type Props = {
  label: string;
  value: string | number;
};

const QuoteTableData = ({ label, value }: Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='font-semibold'>{label}</p>
      <span className='text-gray-500'>{value}</span>
    </div>
  );
};

export default QuoteTableData;
