import Checker from "./Checker";

type AllagreementProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const Allagreement = ({ isChecked, handleClick }: AllagreementProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Checker isChecked={isChecked} handleClick={handleClick} />
      전체 동의
    </div>
  );
};

export default Allagreement;
