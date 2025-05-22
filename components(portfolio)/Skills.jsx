import Container from "./Container";

const Skills = () => {
  return (
    <section id="skills" className="h-[90vh] bg-[#F9C51D]">
      <Container className="h-[100%] flex flex-col justify-center items-center">
        <h2 className="font-bold text-6xl pb-20 hover:scale-[1.05] transition-all duration-200 cursor-pointer">
          SKIILS
        </h2>
        <div className="w-full h-[500px] bg-[#FEF3D2] rounded-3xl flex flex-col justify-center p-10 gap-[50px]">
          <div className="w-full flex gap-[10px]">
            <h2 className="font-bold text-2xl mr-[20px]">Lanuage</h2>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#2F74C0]">
              TypeScript
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#EFD81D]">
              JavaScript
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#3D75A4]">
              Python
            </span>
          </div>
          <div className="w-full flex gap-[10px]">
            <h2 className="font-bold text-2xl mr-[20px]">Frontend</h2>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#000000]">
              Next.js (React)
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#49443E]">
              Zustand
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#FF4260]">
              React-Query
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#0F1931]">
              React-Hook-Form
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#38BDF8]">
              Tailwind CSS
            </span>
          </div>
          <div className="w-full flex gap-[10px]">
            <h2 className="font-bold text-2xl mr-[20px]">DevOps/Tools</h2>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#F79B26]">
              AWS
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#000000]">
              Vercel
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#2468EE]">
              Docker
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#F05033]">
              Git
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#000000]">
              Github
            </span>
            <span className="text-xl px-5 py-2 rounded-2xl bg-[#FFFFFF] text-black">
              Notion
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#F24E1E]">
              Figma
            </span>
            <span className="text-xl px-5 py-2 text-white rounded-2xl bg-[#397792]">
              VS Code
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
