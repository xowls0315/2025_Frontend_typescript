"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const clipPath1 = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const clipPath2 = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const clipPath3 = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const clipPath4 = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  const slideUp1 = useTransform(scrollYProgress, [0.4, 0.45], [1000, 0]);
  const slideUp2 = useTransform(scrollYProgress, [0.5, 0.55], [0, -1000]);
  const slideUp3 = useTransform(scrollYProgress, [0.6, 0.65], [0, -1000]);
  const slideUp4 = useTransform(scrollYProgress, [0.7, 0.75], [0, -1000]);
  const slideUp5 = useTransform(scrollYProgress, [0.8, 0.85], [0, -1000]);
  const slideUp6 = useTransform(scrollYProgress, [0.9, 0.95], [0, -1000]);

  const rotate1 = useTransform(
    scrollYProgress,
    [0.6, 0.605],
    ["-5deg", "0deg"]
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0.7, 0.705],
    ["-20deg", "0deg"]
  );
  const rotate3 = useTransform(
    scrollYProgress,
    [0.8, 0.805],
    ["10deg", "0deg"]
  );
  const rotate4 = useTransform(
    scrollYProgress,
    [0.9, 0.905],
    ["-10deg", "0deg"]
  );

  const opacity1 = useTransform(scrollYProgress, [0.6, 0.605], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.605], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.605], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.605], [0, 1]);

  return (
    <div ref={containerRef} className="h-[1000vh] relative bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ clipPath: clipPath1 }}
          className="absolute top-0 left-0 right-400 h-full flex items-center justify-center text-6xl text-white"
        >
          다양한 편의 시설
        </motion.div>
        <motion.div
          style={{ clipPath: clipPath2 }}
          className="absolute top-20 left-0 right-400 h-full flex items-center justify-center text-6xl text-white"
        >
          맞춤 공간에서
        </motion.div>
        <motion.div
          style={{ clipPath: clipPath3 }}
          className="absolute top-0 left-400 right-0 h-full flex items-center justify-center text-6xl text-white"
        >
          제네시스의 감성을
        </motion.div>
        <motion.div
          style={{ clipPath: clipPath4 }}
          className="absolute top-20 left-400 right-0 h-full flex items-center justify-center text-6xl text-white"
        >
          경험하세요
        </motion.div>
        <motion.div
          style={{ y: slideUp1 }}
          className="absolute w-[600px] h-[600px] flex items-center justify-center"
        >
          <motion.div
            style={{
              y: slideUp2,
              backgroundImage: "url('/gangnam1.jpg')",
              backgroundSize: "cover",
              zIndex: 5,
            }}
            className="absolute w-[600px] h-[400px] flex items-center justify-center"
          >
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                color: "white",
              }}
            >
              큐레이터가 고객과 만나는 공간으로, 차량 옵션 안내가 이루어집니다.
            </span>
          </motion.div>
          <motion.div
            style={{
              y: slideUp3,
              backgroundImage: "url('/gangnam2.jpg')",
              backgroundSize: "cover",
              zIndex: 4,
              rotate: rotate1,
            }}
            className="absolute w-[500px] h-[500px] flex items-center justify-center"
          >
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                color: "white",
              }}
            >
              고객 체험 여정의 시작과 끝이 이뤄지는 환대와 환송의 공간입니다.
            </span>
          </motion.div>
          <motion.div
            style={{
              y: slideUp4,
              backgroundImage: "url('/gangnam3.jpg')",
              backgroundSize: "cover",
              zIndex: 3,
              rotate: rotate2,
            }}
            className="absolute w-[550px] h-[450px] flex items-center justify-center"
          >
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                color: "white",
              }}
            >
              내외장재의 컬러와 재질을 확인하고 비교할 수 있는 공간입니다.
            </span>
          </motion.div>
          <motion.div
            style={{
              y: slideUp5,
              backgroundImage: "url('/gangnam4.jpg')",
              backgroundSize: "cover",
              zIndex: 2,
              rotate: rotate3,
            }}
            className="absolute w-[400px] h-[450px] flex items-center justify-center"
          >
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                color: "white",
              }}
            >
              제네시스 최상급 모델인 G90을 비롯해 G70, G80, GV60, GV70, GV80
              모델을 볼 수 있습니다.
            </span>
          </motion.div>
          <motion.div
            style={{
              y: slideUp6,
              backgroundImage: "url('/gangnam5.jpg')",
              backgroundSize: "cover",
              zIndex: 1,
              rotate: rotate4,
            }}
            className="absolute w-[400px] h-[600px] flex items-center justify-center"
          >
            <span
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                color: "white",
              }}
            >
              제네시스 차량의 품격을 완성해 주는 내외장재를 실제로 확인할 수
              있는 공간입니다.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
