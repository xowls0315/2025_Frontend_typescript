import RoundChecker from "./checkers/RoundChecker";
import TitleInstruction from "./instructions/TitleInstruction";

type AllagreementProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const Allagreement = ({ isChecked, handleClick }: AllagreementProps) => {
  return (
    <div className="flex gap-2 items-center font-bold">
      <RoundChecker isChecked={isChecked} handleClick={handleClick} />
      <TitleInstruction instruction={"전체 동의"} />
    </div>
  );
};

export default Allagreement;
