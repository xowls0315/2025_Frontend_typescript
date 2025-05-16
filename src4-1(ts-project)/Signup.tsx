"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Signup = () => {
  // 각 항목의 상태를 관리할 state
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isLocationServiceAgreed, setIsLocationServiceAgreed] = useState(false);
  const [isPromoAgreed, setIsPromoAgreed] = useState(false);

  // 전체 동의 상태를 관리할 state
  const [isAllAgreed, setIsAllAgreed] = useState(false);

  // 클릭 시 상태를 토글하는 함수
  const toggleCheckbox = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState((prev) => !prev); // 기존 값과 반대 값을 설정
  };

  // 전체 동의 상태를 토글하고 모든 항목 상태를 업데이트하는 함수
  const toggleAllCheckboxes = () => {
    const newState = !isAllAgreed; // 현재 상태 반전
    setIsAllAgreed(newState);

    // 전체 동의가 true일 경우 모든 항목을 true로 설정
    setIsAgeVerified(newState);
    setIsTermsAgreed(newState);
    setIsLocationServiceAgreed(newState);
    setIsPromoAgreed(newState);
  };

  return (
    <div
      className={
        "w-[500px] h-[800px] border-2 border-black p-[30px] flex flex-col"
      }
    >
      <div className={"text-3xl font-bold text-[#FF2233] text-center"}>
        PAYCO
      </div>
      <h2 className={"text-2xl font-bold mt-[30px]"}>
        PAYCO 회원가입을 위해
        <br />
        약관에 동의해 주세요
      </h2>
      <span className={"text-gray-400 py-[10px]"}>
        티켓링크 서비스는 PAYCO로 이용할 수 있어요.
      </span>

      <div className={"flex flex-col my-[40px] gap-[30px]"}>
        {/* 전체 동의 아이콘 클릭 시 토글 */}
        <h2
          className={"flex gap-[10px] font-bold text-[20px] cursor-pointer"}
          onClick={toggleAllCheckboxes} // 클릭 시 전체 동의 토글
        >
          <FaCheckCircle
            className={
              isAllAgreed
                ? "text-[white] rounded-[999px] bg-red-500"
                : "text-[white] rounded-[999px] bg-gray-300"
            }
          />
          전체 동의
        </h2>

        {/* 체크박스를 클릭할 때마다 색상이 토글됨 */}
        <span
          className={"flex gap-[10px] text-[18px] cursor-pointer"}
          onClick={() => toggleCheckbox(setIsAgeVerified)} // 클릭 시 상태 반전
        >
          <FaCheck
            className={isAgeVerified ? "text-red-500" : "text-gray-200"}
          />
          만 14세 이상입니다.
        </span>

        <span
          className={"flex gap-[10px] text-[18px] cursor-pointer"}
          onClick={() => toggleCheckbox(setIsTermsAgreed)} // 클릭 시 상태 반전
        >
          <FaCheck
            className={isTermsAgreed ? "text-red-500" : "text-gray-200"}
          />
          [필수] 이용약관, 개인정보 수집/이용
        </span>

        <span
          className={"flex gap-[10px] text-[18px] cursor-pointer"}
          onClick={() => toggleCheckbox(setIsLocationServiceAgreed)} // 클릭 시 상태 반전
        >
          <FaCheck
            className={
              isLocationServiceAgreed ? "text-red-500" : "text-gray-200"
            }
          />
          [선택] 위치 기반 서비스 이용
        </span>

        <span
          className={"flex gap-[10px] text-[18px] cursor-pointer"}
          onClick={() => toggleCheckbox(setIsPromoAgreed)} // 클릭 시 상태 반전
        >
          <FaCheck
            className={isPromoAgreed ? "text-red-500" : "text-gray-200"}
          />
          [선택] 홍보성 정보 수신
        </span>
      </div>
      <button
        className={
          isTermsAgreed
            ? "w-[100%] h-[60px] rounded-xl bg-red-500 mt-[50px] text-white"
            : "w-[100%] h-[60px] rounded-xl bg-gray-200 mt-[50px] text-gray-400"
        }
      >
        다음
      </button>
    </div>
  );
};

export default Signup;
