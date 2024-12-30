import SkillCard from "./SkillCard";
import { ReactComponent as HTMLsvg } from "../assets/html5.svg";
import { ReactComponent as CSSsvg } from "../assets/css3.svg";
import { ReactComponent as JSsvg } from "../assets/js.svg";
import { ReactComponent as REACTsvg } from "../assets/react.svg";
import { ReactComponent as TAILWINDsvg } from "../assets/tailwind.svg";
import { ReactComponent as NODEsvg } from "../assets/node.svg";
import { ReactComponent as FIREBASEsvg } from "../assets/firebase.svg";
import { ReactComponent as CPPsvg } from "../assets/cpp.svg";
import { ReactComponent as GITsvg } from "../assets/git.svg";
import { ReactComponent as MUIsvg } from "../assets/mui.svg";
import { ReactComponent as VSsvg } from "../assets/vs.svg";
import { ReactComponent as REDUXsvg } from "../assets/redux.svg";
import { useEffect, useRef, useState } from "react";

const Skills = ({ setActiveSection }) => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const divPosition = document.getElementById("animatedDiv").offsetTop;

    // Check if the scroll position is at the middle of the screen
    if (scrollPosition >= divPosition + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("skills");
        }
      },
      { threshold: 0.5 } // 50% of the section needs to be visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  return (
    <div
      ref={sectionRef}
      id="skills"
      className="pt-10 md:pt-20 px-6 md:px-32 bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-400"
    >
      {/* heading */}
      <div className="mb-10 text-center">
        <div className="text-4xl mb-2 font-bold text-[#404040] dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Skills
        </div>
        <div className="text-xs">My technical level</div>
      </div>

      <div
        id="animatedDiv"
        className={`flex flex-wrap transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* first container */}
        <div className="w-1/2 md:w-1/4 px-1 md:p-3">
          <SkillCard
            skill="React"
            level="Intermediate"
            Logo={REACTsvg}
            color="#087EA4"
            percent="70"
          />
          <SkillCard
            skill="Redux"
            level="Intermediate"
            Logo={REDUXsvg}
            color="#7248B6"
            percent="60"
          />
          <SkillCard
            skill="Tailwind"
            level="Advanced"
            Logo={TAILWINDsvg}
            color="#087EA4"
            percent="90"
          />
        </div>
        {/* second container */}
        <div className="w-1/2 md:w-1/4 px-1 md:p-3">
          <SkillCard
            skill="Javascript"
            level="Intermediate"
            Logo={JSsvg}
            color="#E59D37"
            percent="70"
          />
          <SkillCard
            skill="HTML 5"
            level="Intermediate"
            Logo={HTMLsvg}
            color="#F16529"
            percent="60"
          />
          <SkillCard
            skill="CSS 3"
            level="Advanced"
            Logo={CSSsvg}
            color="#254BDF"
            percent="90"
          />
        </div>

        {/* third container */}

        <div className="w-1/2 md:w-1/4 px-1 md:p-3">
          <SkillCard
            skill="Material UI"
            level="Intermediate"
            Logo={MUIsvg}
            color="#0081CB"
            percent="60"
          />
          <SkillCard
            skill="Firebase"
            level="Basic"
            Logo={FIREBASEsvg}
            color="#DD2C00"
            percent="30"
          />

          <SkillCard
            skill="Git"
            level="Intermediate"
            Logo={GITsvg}
            color="#F05133"
            percent="60"
          />
        </div>

        {/* fourth container */}
        <div className="w-1/2 md:w-1/4 px-1 md:p-3">
          <SkillCard
            skill="C++"
            level="Intermediate"
            Logo={CPPsvg}
            color="#004482"
            percent="80"
          />
          <SkillCard
            skill="Node JS"
            level="Basic"
            Logo={NODEsvg}
            color="#689F63"
            percent="30"
          />
          <SkillCard
            skill="VS Code"
            level="Intermediate"
            Logo={VSsvg}
            color="#087EA4"
            percent="70"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
