import { InstructionProps } from "./Instruction";

type TitleInstructionComponentProps = Pick<InstructionProps, "instruction">;

const TitleInstruction = ({ instruction }: TitleInstructionComponentProps) => {
  return <span className="font-bold">{instruction}</span>;
};

export default TitleInstruction;
