import Link from "next/link";
import Container from "./Container";

const Archiving = () => {
  return (
    <section id="archiving" className="h-[70vh] bg-[#000000] text-white">
      <Container className="h-[100%] flex flex-col items-center">
        <h2 className="font-bold text-6xl py-20 hover:scale-[1.05] transition-all duration-200 cursor-pointer">
          ARCHIVING
        </h2>
        <Link
          className="w-[600px] h-[500px] bg-[#F5F5F5] rounded-3xl flex flex-col justify-center p-10 gap-[20px] text-black hover:scale-[1.05] transition-all duration-200 cursor-pointer"
          href="https://github.com/xowls0315"
        >
          <h2 className="font-bold text-5xl">GitHub</h2>
          <span className="text-2xl">https://github.com/xowls0315</span>
          <span className="text-xl">소스 코드 저장소</span>
        </Link>
      </Container>
    </section>
  );
};

export default Archiving;
