"use client";

import { useScroll, useTransform, motion } from "framer-motion";

const Page = () => {
  const { scrollY } = useScroll();

  const layer0 = useTransform(scrollY, [0, 2000], [0, 0]);
  const layer1 = useTransform(scrollY, [0, 2000], [0, 100]);
  const layer2 = useTransform(scrollY, [0, 2000], [0, 200]);
  const layer3 = useTransform(scrollY, [0, 2000], [0, 300]);
  const layer4 = useTransform(scrollY, [0, 2000], [0, 400]);
  const layer5 = useTransform(scrollY, [0, 2000], [0, 500]);
  const layer6 = useTransform(scrollY, [0, 2000], [0, 600]);
  const layer7 = useTransform(scrollY, [0, 2000], [0, 700]);
  const layer8 = useTransform(scrollY, [0, 2000], [0, 800]);

  return (
    <div
      style={{
        height: "200vh",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
        <motion.div
          style={{
            y: [
              layer0,
              layer1,
              layer2,
              layer3,
              layer4,
              layer5,
              layer6,
              layer7,
              layer8,
            ][v - 1],
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url('/parallax${v}.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default Page;
