type Props = {
  name: string;
  className?: string;
  onClickHandler: () => void;
};

const GeneralButton = ({ name, className, onClickHandler }: Props) => {
  return (
    <button className={`btn btn-success ${className}`} onClick={onClickHandler}>
      {name}
    </button>
  );
};

export default GeneralButton;
