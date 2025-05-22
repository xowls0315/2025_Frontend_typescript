import Link from "next/link";
import Container from "./Container";

const Projects = () => {
  return (
    <section id="projects" className="h-[70vh] bg-[#F5F5F5] text-black">
      <Container className="h-[100%] flex flex-col items-center">
        <h2 className="font-bold text-6xl py-20 hover:scale-[1.05] transition-all duration-200 cursor-pointer">
          PROJECTS
        </h2>
        <Link
          className="w-[600px] h-[500px] bg-[#420000] rounded-3xl flex flex-col justify-center p-10 gap-[20px] text-white hover:scale-[1.05] transition-all duration-200 cursor-pointer"
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

export default Projects;
