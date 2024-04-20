type Props = {
  size: number;
};

export const ArrowLeftArrow = ({ size }: Props) => {
  return (
    <svg
      className='text-gray-800 dark:text-white'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 12h14M5 12l4-4m-4 4 4 4'
      />
    </svg>
  );
};
