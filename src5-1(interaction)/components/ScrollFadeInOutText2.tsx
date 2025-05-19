"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollProps = {
  text: string;
};

const ScrollFadeInOutText2 = ({ text }: ScrollProps) => {
  // useScroll은 현재 스크롤 위치(scrollY)와 진행률(scrollYProgress)를 추적하는 함수
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const xRight = useTransform(scrollYProgress, [0.2, 0.8], [0, 300]);
  const xLeft = useTransform(scrollYProgress, [0.2, 0.8], [0, -300]);

  return (
    <div ref={container} className="relative h-[200vh]">
      <motion.section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-8xl">
        <motion.div style={{ opacity: opacity, x: xRight }}>{text}</motion.div>
        <motion.div style={{ opacity: opacity }}>{text}</motion.div>
        <motion.div style={{ opacity: opacity, x: xLeft }}>{text}</motion.div>
      </motion.section>
    </div>
  );
};

export default ScrollFadeInOutText2;
