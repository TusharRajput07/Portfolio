import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../utils.js/profile1.jpg";
import SendIcon from "@mui/icons-material/Send";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Home = () => {
  return (
    <div className="flex px-36 bg-[#f0f0f0] dark:bg-[#101826]">
      {/* left container */}
      <div className="h-[90vh] flex flex-col justify-center gap-4 mr-20">
        <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
          <InstagramIcon />
        </IconButton>
        <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
          <GitHubIcon />
        </IconButton>
        <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
          <LinkedInIcon />
        </IconButton>
      </div>

      {/* right container */}
      <div className="flex pt-24 text-gray-500 w-full">
        {/* name info */}
        <div className="w-1/2 dark:text-gray-300 pl-10">
          <div className="text-[#404040] leading-normal mb-5 text-5xl font-bold dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#a34b74] dark:text-transparent dark:bg-clip-text dark:animate-gradient">
            Tushar Rajput
          </div>
          <div className="my-4">full stack developer</div>
          <div className="text-sm font-light">
            I'm creative ui designer and developer and I'm very passionate and
            dedicated to my work
          </div>
          <div className="text-base pl-6 flex items-center bg-[#404040] px-4 py-2 w-fit rounded-lg text-white my-10 cursor-pointer hover:shadow-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient">
            Say Hello
            <SendIcon className="-rotate-45 ml-1 pb-1" />
          </div>
          <div className="mt-16 transition-all ease-in-out duration-500 hover:translate-y-5 w-fit cursor-pointer">
            Scroll down
            <KeyboardDoubleArrowDownIcon className="ml-1 " />
          </div>
        </div>
        {/* profile image */}
        <div className="w-1/2 pl-20">
          <img
            className="w-64 h-64 object-cover border-8 border-[#565656] shadow-lg animate-profile-animate"
            src={profile}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
