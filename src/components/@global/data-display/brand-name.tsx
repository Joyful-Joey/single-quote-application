type Props = {
  className?: string;
};

const BrandName = ({ className }: Props) => {
  return (
    <h1 className={`text-center font-semibold text-itsmygroup ${className}`}>
      Itsmygroup
    </h1>
  );
};

export default BrandName;
