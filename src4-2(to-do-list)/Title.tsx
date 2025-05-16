"use client";

import { useState, useEffect } from "react";

const Title = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(
        `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8">
      <div className="text-4xl font-bold">
        Nice Day, <span className="text-[cadetblue]">God Bless You!</span>
      </div>
      <span className="text-xl font-semibold mt-4 block">
        현재 시간: <span className="text-[orange]">{currentTime}</span>
      </span>
    </div>
  );
};

export default Title;
