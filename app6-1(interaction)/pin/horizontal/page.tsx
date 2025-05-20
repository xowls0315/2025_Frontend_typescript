"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <div ref={container} className="h-[300vh] relative">
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          width: "300%",
          display: "flex",
          x,
        }}
      >
        <div className="w-full h-full bg-amber-300"></div>
        <div className="w-full h-full bg-sky-200"></div>
        <div className="w-full h-full bg-emerald-300"></div>
      </motion.div>
    </div>
  );
};

export default Page;
