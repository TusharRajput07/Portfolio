import profile from "../utils.js/profile2.jpg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const About = () => {
  return (
    <div className="px-32 pt-16 pb-24 text-center text-gray-700 bg-[#f0f0f0] dark:bg-[#101826] dark:text-gray-400">
      {/* heading */}
      <div className="mb-16">
        <div className="text-4xl font-bold mb-2 text-[#404040] dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          About Me
        </div>
        <div className="text-xs">My introduction</div>
      </div>
      {/* container */}
      <div className="flex">
        {/* profile image */}
        <div className="w-1/2 flex justify-center">
          <img className="w-80 h-80 rounded-3xl object-cover" src={profile} />
        </div>
        {/* info box */}
        <div className="w-1/2 text-center pt-5 pb-10">
          <div className="flex justify-center gap-3">
            <div className="w-36 h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <TimelineOutlinedIcon />
              </span>
              <span className="text-base font-bold">Experience</span>
              <span className="text-sm font-light">0 years</span>
            </div>
            <div className="w-36 h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <CasesOutlinedIcon />
              </span>
              <span className="text-base font-bold">Completed</span>
              <span className="text-sm font-light">8+ projects</span>
            </div>
            <div className="w-36 h-28 p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <PermPhoneMsgOutlinedIcon />
              </span>
              <span className="text-base font-bold">Support</span>
              <span className="text-sm font-light">online 24/7</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 font-semibold py-5 dark:text-gray-500">
            A Front-End Developer skilled in React and Tailwind CSS specializes
            in building responsive, dynamic, and visually appealing web
            applications. They leverage React's component-based architecture for
            efficient UI development and state management, while using Tailwind
            CSS for fast, utility-first styling.
          </div>
          <div className="bg-[#404040] text-white text-lg mx-auto mt-5   w-fit rounded-lg cursor-pointer hover:shadow-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient">
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
