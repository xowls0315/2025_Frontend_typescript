import Aboutme from "@/components/Aboutme";
import Archiving from "@/components/Archiving";
import Introduce from "@/components/Introduce";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Introduce />
      <Aboutme />
      <Skills />
      <Archiving />
      <Projects />
    </div>
  );
}
