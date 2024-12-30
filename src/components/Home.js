import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../utils.js/profile1.jpg";
import SendIcon from "@mui/icons-material/Send";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useEffect, useRef } from "react";

const Home = ({ setActiveSection }) => {
  const sectionRef = useRef(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ block: "start" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("home");
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
      id="home"
      className="flex px-8 md:px-36 pt-10 bg-[#f0f0f0] dark:bg-[#101826]"
    >
      {/* left container */}
      <div className="hidden md:flex h-[90vh] flex-col justify-center gap-4 md:mr-20">
        <a href="https://www.linkedin.com/in/tusharrajput71/" target="_blank">
          <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
            <LinkedInIcon />
          </IconButton>
        </a>
        <a href="https://github.com/TusharRajput07" target="_blank">
          <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
            <GitHubIcon />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/tusharrajput7102/" target="_blank">
          <IconButton className="dark:text-gray-500 dark:hover:text-[#56B4AC]">
            <InstagramIcon />
          </IconButton>
        </a>
      </div>

      {/* right container */}
      <div className="flex flex-wrap-reverse pt-10 md:pt-24 text-gray-500 w-full">
        {/* name info */}
        <div className="w-full md:w-1/2 dark:text-gray-300 md:pl-10 text-center md:text-left">
          <div className="text-[#404040] leading-normal md:leading-normal md:mb-5 text-3xl md:text-5xl font-extrabold dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#8b747f] dark:text-transparent dark:bg-clip-text dark:animate-gradient">
            Tushar Rajput
          </div>
          <div className="mb-4 md:my-4">Full stack developer</div>
          <div className="text-sm font-light dark:text-gray-400">
            A Full Stack Developer with a strong focus on UI development,
            skilled in both front-end and back-end technologies, creating
            visually appealing and user-friendly interfaces.
          </div>
          <div
            onClick={scrollToContact}
            className="text-base flex items-center bg-[#404040]  w-fit rounded-lg text-white my-10 cursor-pointer hover:shadow-lg dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient mx-auto md:mx-0"
          >
            <div className="pl-6 px-4 py-2 hover:scale-[90%] transition-all duration-150 ease-in-out">
              Say Hello
              <SendIcon className="-rotate-45 ml-1 pb-1" />
            </div>
          </div>
          <div
            onClick={scrollToAbout}
            className="md:mt-16 transition-all ease-in-out duration-500 hover:translate-y-5 cursor-pointer"
          >
            Scroll down
            <KeyboardDoubleArrowDownIcon className="ml-1" />
          </div>
        </div>
        {/* profile image */}
        <div className="w-full md:w-1/2 md:pl-20 mb-5 md:mb-0">
          <img
            className="w-60 h-60 md:w-80 md:h-80 object-cover border-8 border-[#565656] shadow-lg animate-profile-animate mx-auto md:mx-0"
            src={profile}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
