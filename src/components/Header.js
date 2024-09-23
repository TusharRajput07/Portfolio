import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-32 text-[#5f5e5e] bg-white">
      <div className="flex items-center relative cursor-pointer">
        <span className="text-5xl font-extrabold text-black">T</span>
        <span className="text-7xl font-serif text-[#c4c4c4] absolute -top-2 left-2">
          R
        </span>
      </div>
      <div className="flex gap-10 text-base font-semibold">
        <div className=" cursor-pointer text-[#5f5e5e] hover:text-black">
          Home
        </div>
        <div className=" cursor-pointer text-[#5f5e5e] hover:text-black">
          About
        </div>
        <div className=" cursor-pointer text-[#5f5e5e] hover:text-black">
          Projects
        </div>
        <div className=" cursor-pointer text-[#5f5e5e] hover:text-black">
          Skills
        </div>
        <div className=" cursor-pointer text-[#5f5e5e] hover:text-black">
          Contact
        </div>
        <DarkModeIcon />
      </div>
    </div>
  );
};

export default Header;
