import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DialogMedia from "./DialogMedia";
import { useState } from "react";

const ProjectCard = ({
  name,
  screenshot,
  overview,
  tech,
  overview2,
  launch,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="min-h-40 md:min-h-80 min-w-64 md:min-w-96 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 dark:bg-[#000000]">
      <div className="w-full">
        <img className="w-full" src={screenshot} />
      </div>
      <div className="p-3 h-full dark:bg-gradient-to-r  dark:from-[#174b47] dark:to-[#1c0d25] dark:text-white">
        <div className="text-2xl font-bold">{name}</div>
        <div className="text-sm my-2">{overview}</div>
        <div className="flex gap-2 mt-4 mb-2">
          <a href={launch} target="blank">
            <div className="flex justify-center items-center bg-[#404040] text-white w-fit rounded-lg text-sm shadow-lg cursor-pointer ">
              <div className="px-3 pt-1 pb-2 hover:scale-[90%] transition-all duration-150 ease-in-out flex justify-center items-center dark:bg-[#646464] rounded-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient">
                Launch
                <RocketLaunchIcon className="ml-1" fontSize="small" />
              </div>
            </div>
          </a>
          <div
            onClick={handleOpenDialog}
            className="flex justify-center items-center border border-gray-300 dark:border-gray-600 shadow-lg w-fit rounded-lg text-sm cursor-pointer "
          >
            <div className="px-3 pt-1 pb-2 hover:scale-[90%] transition-all duration-150 ease-in-out flex justify-center items-center">
              More info
              <InfoOutlinedIcon className="ml-1" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      <DialogMedia
        open={openDialog}
        handleClose={handleCloseDialog}
        name={name}
        screenshot={screenshot}
        tech={tech}
        overview2={overview2}
      />
    </div>
  );
};

export default ProjectCard;
