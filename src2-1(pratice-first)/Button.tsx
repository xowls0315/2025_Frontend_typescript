import type { CSSProperties } from "react";

type ButtonProps = {
  backgroundColor: string;
  borderRadius: string;
};

const Button = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    width: "100px",
    height: "50px",
    textAlign: "center",
    backgroundColor,
    borderRadius,
  };

  return <div style={buttonStyle}>버튼</div>;
};

export default Button;
