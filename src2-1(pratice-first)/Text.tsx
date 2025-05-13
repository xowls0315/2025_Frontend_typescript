import type { CSSProperties } from "react";

type ContentsProps = {
  content: string;
};
type ColorProps = {
  color: string;
};
type TextProps = ContentsProps & ColorProps;

const Text = ({ content, color }: TextProps) => {
  const textStyle: CSSProperties = {
    color: color,
  };

  return <div style={textStyle}>{content}</div>;
};

export default Text;
