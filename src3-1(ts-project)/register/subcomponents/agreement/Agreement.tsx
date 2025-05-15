import Checker, { CheckerProps } from "./checkers/Checker";
import Instruction, {
  InstructionComponentProps,
} from "./instructions/Instruction";

export type AgreementProps = InstructionComponentProps & CheckerProps;

const Agreement = ({
  isChecked,
  handleClick,
  required,
  instruction,
}: AgreementProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Checker isChecked={isChecked} handleClick={handleClick} />{" "}
      <Instruction required={required} instruction={instruction} />
    </div>
  );
};

export default Agreement;
