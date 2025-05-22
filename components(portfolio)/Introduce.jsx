import Container from "./Container";

const Introduce = () => {
  return (
    <section id="introduce" className="h-[50vh] bg-[#EDE9DE]">
      <Container>
        <div className="h-[100%] flex flex-col justify-center items-center gap-[20px]">
          <h2 className="font-bold text-5xl">황태진</h2>
          <h2 className="text-3xl">프론트엔드 개발자 포트폴리오</h2>
          <div className="h-[200px] flex flex-col justify-center items-center text-xl text-blue-800 gap-[10px]">
            <span>안녕하세요!</span>
            <span>본질에 집중하는 프론트엔드 개발자</span>
            <span>황태진 입니다.</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduce;
