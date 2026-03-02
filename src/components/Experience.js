import NETFLIX_SS from "../utils.js/netflixSS.png";
import ExperienceCard from "./ExperienceCard";
import HCL_LOGO from "../logos/HCL_LOGO.avif";

import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const Experience = ({ setActiveSection }) => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("experienceDiv").offsetTop; // where the div starts (eg. 2000px)

    // check if the amount you have come down is more than the position where the div starts
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
          setActiveSection("experience");
        }
      },
      { threshold: 0.5 }, // 50% of the section needs to be visible
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
      id="experience"
      className="pt-10 md:pt-20 bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-300 overflow-hidden"
    >
      {/* heading */}
      <div className="mb-10 text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Experience
        </div>
        <div className="text-xs">My experiences so far</div>
      </div>
      {/* cardList */}
      <div
        id="experienceDiv"
        className={`flex px-10 md:px-28 gap-4 md:gap-8 overflow-y-hidden overflow-x-scroll no-scrollbar pb-10 transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        {/* cards */}
        <ExperienceCard
          name="HCLTech"
          screenshot={HCL_LOGO}
          overview="Scholar Trainee"
          duration="June 2025 - December 2025"
          location="Noida, India"
          overview2="Trained in Python programming with libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization. Worked on a capstone project simulating real-world data analysis, where I implemented data preprocessing, exploratory data analysis (EDA), and visualizations to derive insights from large datasets. Collaborated with peers in coding exercises and problem-solving sessions, enhancing teamwork and debugging skills. Built a strong foundation in Python programming, data handling, and analytical problem-solving to prepare for project assignments in the IT industry."
        />
      </div>
    </div>
  );
};

export default Experience;
