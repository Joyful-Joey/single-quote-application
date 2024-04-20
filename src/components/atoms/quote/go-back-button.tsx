'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeftArrow } from '../../../../public/assets/svgs';

type Props = {
  className?: string;
};

const GoBackButton = ({ className }: Props) => {
  const router = useRouter();
  const handleGoBackButtonOnClick = () => {
    router.push('/');
  };
  return (
    <button className={className} onClick={handleGoBackButtonOnClick}>
      <ArrowLeftArrow size={25} />
    </button>
  );
};

export default GoBackButton;
