"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export type CheckerProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const Checker = ({ isChecked, handleClick }: CheckerProps) => {
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // const handleClick = () => setIsChecked((prev) => !prev);

  return (
    <div onClick={handleClick} className="w-fit">
      <FaCheck style={{ color: isChecked ? "red" : "grey" }} />
    </div>
  );
};

export default Checker;
