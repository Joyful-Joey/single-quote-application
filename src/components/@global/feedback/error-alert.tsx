import { CrossWithCircleSVG } from '../../../../public/assets/svgs';

type Props = {
  message: string;
  className?: string;
};

const ErrorAlert = ({ message, className }: Props) => {
  return (
    <div role='alert' className={`alert alert-error ${className}`}>
      <CrossWithCircleSVG />
      <span>Error! {message}.</span>
    </div>
  );
};

export default ErrorAlert;
