import Container from "./Container";

const Aboutme = () => {
  return (
    <section id="aboutme" className="h-[50vh]">
      <Container className="h-[100%] flex flex-col items-center">
        <h2 className="font-bold text-6xl py-20 hover:scale-[1.05] transition-all duration-200 cursor-pointer">
          ABOUT ME
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full">
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">이름</h3>
            <span className="text-xl">황태진</span>
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">생년월일</h3>
            <span className="text-xl">2001.03.15</span>
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">위치</h3>
            <span className="text-xl">경기도 부천시</span>
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">연락처</h3>
            <span className="text-xl">010-7578-1878</span>
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">이메일</h3>
            <span className="text-xl">601135@naver.com</span>
          </div>
          <div className="h-24 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">학력</h3>
            <span className="text-xl">한성대학교(컴퓨터공학부)</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aboutme;
