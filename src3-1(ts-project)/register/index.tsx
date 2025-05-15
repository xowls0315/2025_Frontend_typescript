"use client";

import { useState } from "react";
import Agreement, { AgreementProps } from "./subcomponents/agreement/Agreement";
import Next from "./subcomponents/Next/Next";
import Allagreement from "./subcomponents/agreement/Allagreement";
import Header from "./subcomponents/Header";

type Agreement = { isMandantory: boolean } & AgreementProps;
const Register = () => {
  const [agreements, setAgreements] = useState<Agreement[]>([
    {
      isMandantory: false,
      isChecked: false,
      handleClick: () => handleClickOne(0),
      instruction: "만 14세 이상입니다.",
    },
    {
      isMandantory: true,
      isChecked: false,
      handleClick: () => handleClickOne(1),
      instruction: "이용약관, 개인정보 수집/이용",
      required: "mandantory",
    },
    {
      isMandantory: false,
      isChecked: false,
      handleClick: () => handleClickOne(2),
      instruction: "위치 기반 서비스 이용",
      required: "option",
    },
    {
      isMandantory: false,
      isChecked: false,
      handleClick: () => handleClickOne(3),
      instruction: "홍보성 정보 수신",
      required: "option",
    },
    {
      isMandantory: true,
      isChecked: false,
      handleClick: () => handleClickOne(4),
      instruction: "댕댕이 복지 혜택",
      required: "mandantory",
    },
    {
      isMandantory: false,
      isChecked: false,
      handleClick: () => handleClickOne(5),
      instruction: "냥냥 펀치 데미지",
      required: "option",
    },
  ]);

  // 전체 토글 핸들러
  const handleClickAll = () =>
    setAgreements((prev) =>
      [...prev].map((v) => ({
        ...v,
        isChecked: !agreements.every((v) => v.isChecked),
      }))
    );
  // 개별 Agreement 핸들러
  const handleClickOne = (index: number) => {
    setAgreements((prev) =>
      [...prev].map((v, i) =>
        i === index ? { ...v, isChecked: !v.isChecked } : v
      )
    );
  };

  return (
    <div className={"w-[450px] border-2 border-black p-[30px]"}>
      <Header />
      <div className={"flex flex-col gap-[20px]"}>
        <Allagreement
          isChecked={agreements.every((v) => v.isChecked)}
          handleClick={handleClickAll}
        />
        {agreements.map((v, i) => (
          <Agreement key={i} {...v} />
        ))}
      </div>

      <Next
        isPass={agreements
          .filter((v) => v.isMandantory)
          .every((v) => v.isChecked)}
      />
    </div>
  );
};

export default Register;
