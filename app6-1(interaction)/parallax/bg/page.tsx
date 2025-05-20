"use client";

import { useScroll, motion, useTransform } from "framer-motion";

const Page = () => {
  const { scrollY } = useScroll();
  // clamp: true는 변환값이 지정된 범위를 벗어나지 않도록 제한하는 옵션
  const fgY = useTransform(scrollY, [0, 200], [0, -200], { clamp: true });
  const bgY = useTransform(scrollY, [0, 200], ["10%", "12.5%"], {
    clamp: true,
  });

  return (
    <motion.div style={{ position: "relative", height: "200vh" }}>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
          backgroundPositionY: bgY,
          backgroundImage: "url('/bg.png')",
        }}
      ></motion.div>
      <motion.div
        style={{
          y: fgY,
          position: "absolute",
          top: "50vh",
          left: "50%",
          color: "white",
          fontSize: "50px",
        }}
      >
        <h2>패럴렉스 연습중이다~</h2>
      </motion.div>
    </motion.div>
  );
};

export default Page;
