import Checker, { CheckerProps } from "./Checker";
import Instruction, { InstructionProps } from "./Instruction";

type AgreementProps = InstructionProps & CheckerProps;

const Agreement = ({
  isChecked,
  handleClick,
  required,
  instruction,
}: AgreementProps) => {
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // const handleClick = () => setIsChecked((prev) => !prev);

  return (
    <div className="flex gap-2 items-center">
      <Checker isChecked={isChecked} handleClick={handleClick} />{" "}
      <Instruction required={required} instruction={instruction} />
    </div>
  );
};

export default Agreement;
