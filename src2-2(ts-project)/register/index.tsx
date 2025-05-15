"use client";

import { useState } from "react";
import Agreement from "./subcomponents/agreement/Agreement";
import Next from "./subcomponents/Next/Next";
import Checker from "./subcomponents/agreement/Checker";
import Allagreement from "./subcomponents/agreement/Allagreement";

type AgreementType = { isMandtory: boolean; isChecked: boolean };

const Register = () => {
  const [agreements, setAgreements] = useState<AgreementType[]>([
    { isMandtory: false, isChecked: false },
    { isMandtory: true, isChecked: false },
    { isMandtory: false, isChecked: false },
    { isMandtory: false, isChecked: false },
  ]);

  // 전체 동의 상태: 모든 항목이 체크되었는지 여부
  const isAllChecked = agreements.every((item) => item.isChecked);

  // 전체 토글 핸들러
  const handleClickAll = () => {
    const newValue = !isAllChecked;
    setAgreements((prev) =>
      prev.map((item) => ({ ...item, isChecked: newValue }))
    );
  };

  /*const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = () => setIsChecked((prev) => !prev);

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const handleClick1 = () => setIsChecked1((prev) => !prev);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const handleClick2 = () => setIsChecked2((prev) => !prev);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const handleClick3 = () => setIsChecked3((prev) => !prev);*/

  // 개별 Agreement 핸들러
  const handleClickOne = (index: number) => {
    setAgreements((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // 필수 항목 중 하나라도 체크되지 않으면 Next 비활성화
  const isPass = agreements
    .filter((item) => item.isMandtory)
    .every((item) => item.isChecked);

  return (
    <div>
      회원 등록
      <Allagreement isChecked={isAllChecked} handleClick={handleClickAll} />
      <Agreement
        isChecked={agreements[0].isChecked}
        handleClick={() => handleClickOne(0)}
        instruction="만 14세 이상입니다."
      />
      <Agreement
        isChecked={agreements[1].isChecked}
        handleClick={() => handleClickOne(1)}
        required="mandantory"
        instruction="이용약관, 개인정보 수집/이용"
      />
      <Agreement
        isChecked={agreements[2].isChecked}
        handleClick={() => handleClickOne(2)}
        required="option"
        instruction="위치 기반 서비스 이용"
      />
      <Agreement
        isChecked={agreements[3].isChecked}
        handleClick={() => handleClickOne(3)}
        required="option"
        instruction="홍보성 정보 수신"
      />
      <Next isPass={agreements[1].isChecked} />
    </div>
  );
};

export default Register;
