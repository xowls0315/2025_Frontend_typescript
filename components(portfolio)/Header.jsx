"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [bgColor, setBgColor] = useState("#EDE9DE"); // 기본 배경

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = [
        { id: "introduce", color: "#EDE9DE" },
        { id: "aboutme", color: "#FFFFFF" },
        { id: "skills", color: "#F9C51D" },
        { id: "archiving", color: "#000000" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollY + 80) {
          setBgColor(sections[i].color);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-10 shadow-sm py-8 transition-colors duration-300`}
      style={{ backgroundColor: bgColor }}
    >
      <nav className="px-4 w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-500 hover:text-cyan-600 transition-all duration-200">
          <h2>TaeJin's Portfolio</h2>
        </div>
        <div className="text-2xl text-gray-500 flex gap-[20px]">
          <a
            href="#aboutme"
            className="hover:text-cyan-600 transition-all duration-200"
          >
            About me
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-600 transition-all duration-200"
          >
            Skills
          </a>
          <a
            href="#archiving"
            className="hover:text-cyan-600 transition-all duration-200"
          >
            Archiving
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-600 transition-all duration-200"
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
