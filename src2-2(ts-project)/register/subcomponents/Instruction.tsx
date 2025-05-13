export type InstructionProps = {
  required?: "mandantory" | "option";
  instruction: string;
};

const Instruction = ({ required, instruction }: InstructionProps) => {
  const requiredObj = {
    mandantory: "[필수]",
    option: "[선택]",
    no: "",
  };

  return (
    <span>
      {requiredObj[required || "no"]} {instruction}
    </span>
  );
};

export default Instruction;
