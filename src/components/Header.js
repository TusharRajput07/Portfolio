import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 bg-[#f0f0f0] dark:bg-[#101826] bg-gradient-to-b from-[#cfcece] dark:from-[#151515]">
      <div className="flex justify-between items-center py-2 px-8 md:px-16 text-gray-600 dark:text-gray-300">
        {/* Logo Section */}
        <div className="text-sm md:text-base font-medium">Tushar Rajput</div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4 md:space-x-8 text-xs md:text-sm font-bold">
          <div className="hover:text-black py-2 border-b-[6px] border-transparent hover:border-[#56B4AC] cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white">
            Home
          </div>
          <div className="hover:text-black py-2 border-b-[6px] border-transparent hover:border-[#56B4AC] cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white">
            About
          </div>
          <div className="hover:text-black py-2 border-b-[6px] border-transparent hover:border-[#56B4AC] cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white">
            Projects
          </div>
          <div className="hover:text-black py-2 border-b-[6px] border-transparent hover:border-[#56B4AC] cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white">
            Skills
          </div>
          <div className="hover:text-black py-2 border-b-[6px] border-transparent hover:border-[#56B4AC] cursor-pointer transition-all duration-300 ease-in-out dark:hover:text-white">
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
