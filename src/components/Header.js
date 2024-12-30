import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";

const Header = ({ activeSection }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed w-full z-20 top-0 bg-[#f0f0f0] dark:bg-[#101826] bg-gradient-to-b from-[#cfcece] dark:from-[#151515]">
      <div className="flex justify-between items-center py-2 px-2 md:px-16 text-gray-600 dark:text-gray-300">
        {/* Logo Section */}
        <div className="text-sm md:text-base font-medium hidden md:block">
          Tushar Rajput
        </div>

        {/* Navigation Links */}
        <nav className="flex mx-auto md:mx-0 items-center space-x-3 md:space-x-8 text-xs md:text-sm font-bold">
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "home"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </div>
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "about"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("about")}
          >
            About
          </div>
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "projects"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </div>
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "skills"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </div>
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "hobbies"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("hobbies")}
          >
            Hobbies
          </div>
          <div
            className={`hover:text-black py-2 border-b-[6px] ${
              activeSection === "contact"
                ? "border-[#56B4AC]"
                : "border-transparent"
            } cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </div>

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            className="hover:text-[#56B4AC] pb-1 transition duration-300 focus:outline-none dark:text-[#56B4AC]"
            onClick={toggleDarkMode}
          >
            <DarkModeIcon />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
