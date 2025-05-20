"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="h-[200vh] relative border-20 border-red-200"
    >
      <motion.div
        style={{
          position: "sticky",
          zIndex: "1",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          backgroundImage: "url('/iphone1.jpg')",
          backgroundSize: "cover",
        }}
      ></motion.div>
      <motion.div
        style={{
          position: "sticky",
          zIndex: "2",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          backgroundImage: "url('/iphone2.jpg')",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
};

export default Page;
