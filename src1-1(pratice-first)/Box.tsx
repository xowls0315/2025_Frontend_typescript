import type { CSSProperties } from "react";

type BoxProps = { text: string };
type bg = keyof CSSProperties["backgroundColor"];

const Box = ({ text }: BoxProps) => {
  return <div>{text}</div>;
};

export default Box;
