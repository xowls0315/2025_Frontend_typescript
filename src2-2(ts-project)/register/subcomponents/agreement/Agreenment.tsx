import Checker, { CheckerProps } from "../Checker";
import Instruction, { InstructionProps } from "../Instruction";

type AgreementProps = InstructionProps & CheckerProps;

const Agreement = (props: AgreementProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Checker required={...props} instruction={...props} />
    </div>
  );
};

export default Agreement;
