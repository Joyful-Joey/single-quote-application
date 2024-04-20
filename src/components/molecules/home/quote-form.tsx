'use client';
import GeneralButton from '@/components/@global/form/general-button';
import HeadingText from '@/components/atoms/home/heading-text';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {};

const QuoteForm = (props: Props) => {
  const router = useRouter();
  const [applicantId, setApplicantId] = useState<number | null>(null);
  const handleGetQuoteButtonOnClick = () => {
    if (applicantId != null) {
      router.push(`/quote/${applicantId.toString()}`);
    } else {
      alert('Please enter an applicant ID');
    }
  };
  return (
    <div className='flex w-full flex-col items-center justify-center gap-8'>
      <HeadingText text='Enter applicant ID to search' />
      <input
        type='number'
        placeholder='Type here'
        className='input input-bordered w-full max-w-sm'
        value={applicantId ? applicantId : ''}
        onChange={(e) => setApplicantId(Number(e.target.value))}
      />
      <GeneralButton
        name='Get a quote'
        onClickHandler={handleGetQuoteButtonOnClick}
        className='w-full max-w-sm'
      />
    </div>
  );
};

export default QuoteForm;
