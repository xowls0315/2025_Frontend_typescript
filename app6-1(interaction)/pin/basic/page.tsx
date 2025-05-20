"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div
      ref={container}
      className="h-[300vh] relative border-20 border-red-200"
    >
      <motion.div
        style={{
          opacity,
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-8xl text-blue-400">핀 효과지롱!!</h2>
      </motion.div>
    </div>
  );
};

export default Page;
