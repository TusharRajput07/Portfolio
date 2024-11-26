import profile from "../utils.js/profile2.jpg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as LEETCODEsvg } from "../assets/leetcode.svg";

const About = ({ setActiveSection }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("animateDiv").offsetTop; // where the div starts (eg. 2000px)

    // check if the amount you have come down is more than the position where the div starts
    if (scrollPosition >= divPosition + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("about");
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="px-6 md:px-32 pt-10 md:pt-20 text-center text-gray-700 bg-[#f0f0f0] dark:bg-[#101826] dark:text-gray-400"
    >
      {/* heading */}
      <div className="mb-8 md:mb-16">
        <div className="text-4xl font-bold mb-2 text-[#404040] dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          About Me
        </div>
        <div className="text-xs">My introduction</div>
      </div>
      {/* container */}
      <div
        id="animateDiv"
        className={`md:flex transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* profile image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-60 md:w-80 h-60 md:h-80 rounded-3xl object-cover"
            src={profile}
          />
        </div>
        {/* info box */}
        <div className="w-full md:w-1/2 text-center py-5">
          <div className="flex justify-center gap-2 md:gap-3">
            <div className="w-24 md:w-36 h-24 md:h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <TimelineOutlinedIcon />
              </span>
              <span className="text-sm md:text-base font-bold">Experience</span>
              <span className="text-xs md:text-sm font-light">fresher</span>
            </div>
            <div className="w-24 md:w-36 h-24 md:h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <CasesOutlinedIcon />
              </span>
              <span className="text-sm md:text-base font-bold">Completed</span>
              <span className="text-xs md:text-sm font-light">5+ projects</span>
            </div>
            <a href="https://leetcode.com/u/Tusharr_Rajput/" target="_blank">
              <div className="w-24 md:w-36 h-24 md:h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer">
                <span>
                  <LEETCODEsvg className="w-5 md:w-6 h-5 md:h-6 fill-[#404040] dark:fill-gray-400" />
                </span>
                <span className="text-sm md:text-base font-bold">Leetcode</span>
                <span className="text-xs md:text-sm font-light">
                  300+ problems
                </span>
              </div>
            </a>
          </div>

          <div className="text-sm text-gray-600 font-semibold py-5 dark:text-gray-500">
            A Front-End Developer skilled in React and Tailwind CSS specializes
            in building responsive, dynamic, and visually appealing web
            applications. They leverage React's component-based architecture for
            efficient UI development and state management, while using Tailwind
            CSS for fast, utility-first styling.
          </div>
          <div className="bg-[#404040] text-white text-lg mx-auto mt-2 md:mt-5 w-fit rounded-lg cursor-pointer hover:shadow-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient">
            <div className="px-3 py-2 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
              Download CV
              <DescriptionOutlinedIcon className="ml-1" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute z-10 bottom-5 right-20 w-fit p-3 rounded-xl cursor-pointer bg-[#404040] text-gray-300">
        <ArrowUpwardOutlinedIcon />
      </div> */}
    </div>
  );
};

export default About;
