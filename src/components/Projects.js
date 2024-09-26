import NETFLIX_SS from "../utils.js/netflixSS.png";
import BITEXPRESS_SS from "../utils.js/biteXpressSS.png";
import RPS_SS from "../utils.js/rps.png";
import PL_SS from "../utils.js/PL_SS.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="py-10 bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-300">
      {/* heading */}
      <div className="mb-10 text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Projects
        </div>
        <div className="text-xs">Most recent work</div>
      </div>
      {/* cardList */}
      <div className="flex px-28 gap-8 overflow-y-hidden overflow-x-scroll no-scrollbar pb-10">
        {/* cards */}
        <ProjectCard
          name="Netflix Gemini"
          screenshot={NETFLIX_SS}
          overview="Netflix Gemini is a Netflix clone with additional Gemini Ai features"
        />
        <ProjectCard
          name="BiteXpress"
          screenshot={BITEXPRESS_SS}
          overview="BiteXpress is an web app for online food ordering that uses swiggy's live APIs"
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
