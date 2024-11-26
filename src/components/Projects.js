import NETFLIX_SS from "../utils.js/netflixSS.png";
import BITEXPRESS_SS from "../utils.js/biteXpressSS.png";
import RPS_SS from "../utils.js/rps.png";
import PL_SS from "../utils.js/PL_SS.png";
import PORTFOLIO_SS from "../utils.js/portfolioSS.png";

import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const Projects = ({ setActiveSection }) => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("projectDiv").offsetTop; // where the div starts (eg. 2000px)

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
          setActiveSection("projects");
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
      id="projects"
      className="pt-10 md:pt-20 bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-300 overflow-hidden"
    >
      {/* heading */}
      <div className="mb-10 text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Projects
        </div>
        <div className="text-xs">Most recent work</div>
      </div>
      {/* cardList */}
      <div
        id="projectDiv"
        className={`flex px-10 md:px-28 gap-4 md:gap-8 overflow-y-hidden overflow-x-scroll no-scrollbar pb-10 transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        {/* cards */}
        <ProjectCard
          name="Netflix Gemini"
          screenshot={NETFLIX_SS}
          overview="Netflix Gemini is a Netflix clone with Gemini Ai features for search and movie recommendations"
          tech="React.js | Firebase Auth | Firebase Firestore | Redux | Tailwind CSS | TMDB APIs | Gemini APIs"
          overview2="Netflix Gemini is a Netflix clone app developed using React.js, seamlessly integrating TMDB APIs to provide a rich catalog of movies and TV shows. Netflix Gemini uses Google Firebase to ensure secure and reliable user authentication and authorization. It also uses Firebase Firestore as a database. It provides enhanced user experience by features such as the ability to save movies to a watch later list and track liked movies. It uses Gemini APIs for movies and TV shows search functionality and recommended movies based on user's watchList. Netflix Gemini provides a responsive design using Tailwind CSS."
        />
        <ProjectCard
          name="BiteXpress"
          screenshot={BITEXPRESS_SS}
          overview="BiteXpress is an web app for online food ordering that uses swiggy's live APIs"
          tech={"React.js | Redux |  Parcel | Swiggy APIs"}
          overview2={
            "BiteXpress is an online food ordering app that allows users to explore nearby restaurants, easily add items to their cart, and view a detailed billing summary on the Cart page. It integrates Swiggy APIs to dynamically fetch and display restaurant and menu data in real-time, ensuring up-to-date information. The app uses Redux for efficient state management and leverages Parcel for bundling, enhancing performance and reducing load times. BiteXpress also features a fully responsive design, built with CSS, to deliver a smooth and consistent user experience across various devices."
          }
        />
        <ProjectCard
          name="Portfolio"
          screenshot={PORTFOLIO_SS}
          overview="This very portfolio. Minimalistic design developed using React and Tailwind."
          tech="React.js | Tailwind CSS | EmailJS"
          overview2="This portfolio showcases a minimalistic and modern design, developed using React for dynamic functionality and Tailwind CSS for efficient, responsive styling. The focus is on simplicity and elegance, with key sections like About, Projects, Skills, and Contact highlighted through clean layouts. Subtle animations and transitions enhance navigation and interactivity, while dark mode support ensures a seamless user experience across devices. The design emphasizes usability and accessibility, reflecting both technical expertise and aesthetic considerations."
        />
        <ProjectCard
          name="Premier League UI"
          screenshot={PL_SS}
          overview="A simple non functioning UI of Premier League website. This is the first project I made"
        />
        <ProjectCard
          name="Rock Paper Scissors"
          screenshot={RPS_SS}
          overview="A simple rock paper scirrors game where the score gets tracked in local storage"
        />
      </div>
    </div>
  );
};

export default Projects;
