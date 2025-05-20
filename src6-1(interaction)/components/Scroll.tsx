"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Scroll = () => {
  // useScroll은 현재 스크롤 위치(scrollY)와 진행률(scrollYProgress)를 추적하는 함수
  const container = useRef(null);
  const { scrollY } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollY, [0, 1000], [1, 2]);
  const color = useTransform(scrollY, [0, 1000], ["#000000", "#0000ff"]);
  const x = useTransform(scrollY, [0, 1000], [0, 1000]);

  return (
    <motion.section className="h-[100vh] flex justify-center items-center text-8xl">
      <motion.div style={{ scale: scale, color: color, x: x }}>
        {scrollY}
      </motion.div>
    </motion.section>
  );
};

export default Scroll;
