import { useState } from "react";

const SkillCard = ({ skill, level, Logo, color, percent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const barWidth = isHovered ? 0 : percent;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-fit w-full border border-gray-300 dark:border-gray-600 cursor-pointer shadow-lg rounded-xl mb-6 text-[#404040] dark:text-gray-400"
    >
      <div className="py-2 px-3 hover:scale-[95%] transition-all duration-150 ease-in-out hover">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-bold">{skill}</div>
            <div className="text-sm font-light">{level}</div>
          </div>
          <div>
            <Logo className="w-8 h-8" />
          </div>
        </div>

        <div className="h-2 w-full bg-gray-300 dark:bg-gray-400 rounded-full my-2">
          <div
            style={{ width: barWidth + "%", backgroundColor: color }}
            className={`h-full rounded-full dark:opacity-80 transition-width duration-300 ease-in-out`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
