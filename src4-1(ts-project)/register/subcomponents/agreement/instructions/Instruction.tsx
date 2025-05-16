export type InstructionProps = {
  required: "mandantory" | "option";
  instruction: string;
};

// 매우 어렵 - 매우 중요
export type InstructionComponentProps = Omit<InstructionProps, "required"> &
  Partial<Pick<InstructionProps, "required">>;

const Instruction = ({ required, instruction }: InstructionComponentProps) => {
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
