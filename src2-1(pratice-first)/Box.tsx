import { useState } from "react";

type Box = { text: "하늘" | "핑크"; backgroundColor: "skyblue" | "pink" };

const Box = () => {
  // color, text
  // 배경색: skyblue, pink
  // 글자색: skyblue, pink
  // 클릭하면 토글로 하늘 <-> 핑크

  const [box, setBox] = useState<Box>({
    text: "하늘",
    backgroundColor: "skyblue",
  });

  const boxStyle = {
    backgroundColor: box.backgroundColor,
    padding: "10px",
  };

  const handleClick = () => {
    setBox((prev) => {
      const text = prev.text === "하늘" ? "핑크" : "하늘";
      const backgroundColor =
        prev.backgroundColor === "skyblue" ? "pink" : "skyblue";
      return { text, backgroundColor };
    });
  };

  return (
    <div
      style={boxStyle}
      onClick={() => {
        handleClick();
      }}
    >
      {box.text}
    </div>
  );
};

export default Box;
