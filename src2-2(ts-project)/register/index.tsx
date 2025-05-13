"use client";

import { useState } from "react";
import Agreement from "./subcomponents/agreement/Agreenment";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      회원등록
      <Agreement instruction="만 14세 이상입니다." />
      <Agreement
        required="mandantory"
        instruction="이용약관, 개인정보 수집/이용"
      />
      <Agreement required="option" instruction="위치 기반 서비스 이용" />
      <Agreement required="option" instruction="홍보성 정보 수신" />
    </div>
  );
};

export default Register;
