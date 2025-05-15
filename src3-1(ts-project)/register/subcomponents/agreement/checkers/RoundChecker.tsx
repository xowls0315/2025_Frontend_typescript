import { FaCheck } from "react-icons/fa";

export type RoundCheckerProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const RoundChecker = ({ handleClick, isChecked }: RoundCheckerProps) => {
  const border = isChecked ? "border-red-500" : "border-gray-500";

  return (
    <div
      onClick={handleClick}
      className={`p-1 w-fit rounded-full border-1 ${border}`}
    >
      <FaCheck style={{ color: isChecked ? "red" : "grey" }} />
    </div>
  );
};

export default RoundChecker;
