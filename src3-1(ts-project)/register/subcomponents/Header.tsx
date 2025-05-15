const Header = () => {
  return (
    <div className={"flex flex-col mb-[30px]"}>
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
    </div>
  );
};

export default Header;
