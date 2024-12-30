import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { ReactComponent as LEETCODEsvg } from "../assets/leetcode.svg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  // funtion to open whatsapp
  const openWhataspp = () => {
    const phoneNumber = "+919643418942";
    const message = "Hello, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // function to open gmail
  const openGmail = () => {
    const email = "rajputtushar7102@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full overflow-hidden px-8 md:px-32 pt-10 bg-[#404040] dark:bg-gradient-to-r text-center  dark:from-[#174b47] dark:to-[#1c0d25] text-gray-300">
      <div className="text-3xl md:text-4xl font-bold">Tushar Rajput</div>
      <div className="text-xs my-1">rajputtushar7102@gmail.com</div>
      <div className="text-xs mb-4">+91-964-341-8942</div>

      <a href="/CV.pdf" download="Tushar_Rajput_CV.pdf">
        <div className="bg-[#5a5959] text-white text-sm mx-auto mt-2  w-fit rounded-lg cursor-pointer hover:shadow-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient">
          <div className="px-3 py-2 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
            Download CV
            <DescriptionOutlinedIcon className="ml-1" fontSize="small" />
          </div>
        </div>
      </a>

      <div className="md:flex w-full mb-5">
        {/* left container */}
        <div className="w-full md:w-1/2 pt-8 md:py-5">
          <div className="text-xl font-bold md:mb-2">Get in touch</div>
          <div className="flex justify-center items-center gap-2 md:gap-6">
            <IconButton onClick={openGmail}>
              <EmailIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
            <a href="https://leetcode.com/u/Tusharr_Rajput/" target="_blank">
              <IconButton>
                <LEETCODEsvg className="w-6 h-6 fill-gray-300 dark:hover:fill-[#56B4AC]" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/tusharrajput71/"
              target="_blank"
            >
              <IconButton>
                <LinkedInIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
              </IconButton>
            </a>
            <a href="https://github.com/TusharRajput07" target="_blank">
              <IconButton>
                <GitHubIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
              </IconButton>
            </a>
            <IconButton onClick={openWhataspp}>
              <WhatsAppIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
            <a
              href="https://www.instagram.com/tusharrajput7102/"
              target="_blank"
            >
              <IconButton>
                <InstagramIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
              </IconButton>
            </a>
          </div>
        </div>
        {/* right container */}
        <div className="w-full md:w-1/2 py-5">
          <div className="text-xl font-bold mb-1 md:mb-2">Navigations</div>
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <span
              onClick={() => scrollToSection("home")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("projects")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => scrollToSection("skills")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Skills
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Contact
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs text-center font-light">
        "Created with a blend of creativity and minimalism, this portfolio is
        more than just code — it's a reflection of my love for building
        meaningful experiences."
      </div>

      <div className="text-center text-sm font-light py-5">
        © 2024 Tushar Rajput. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
