import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery, useTheme } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogMedia = ({
  open,
  handleClose,
  name,
  screenshot,
  tech,
  overview2,
}) => {
  //   const theme = useTheme();
  //   const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      onClose={handleClose}
      TransitionComponent={Transition}
      scroll="body"
    >
      <div className="w-full md:w-[65vw]  text-[#404040] bg-[#f0f0f0] overflow-hidden md:p-6 relative dark:bg-[#101826] dark:text-gray-200">
        <CancelIcon
          className="absolute top-3 right-3 text-[#404040] cursor-pointer z-20"
          onClick={handleClose}
          //   fontSize={isLarge ? "large" : "medium"}
          fontSize="large"
        />
        {/* image and name */}
        <div className="md:flex md:mb-5 gap-4">
          <div className="w-full md:w-3/5 ">
            <img className="w-full md:rounded-md" src={screenshot} />
          </div>
          <div className="w-full md:w-2/5 flex flex-col p-2 md:p-0">
            <div className="text-3xl md:text-4xl leading-normal md:leading-snug font-bold dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient py-2 md:py-0">
              {name}
            </div>
            <div className="text-lg md:text-xl font-bold md:mb-1 mt-auto">
              Tech Stack
            </div>
            <div className="text-sm md:mb-2 font-normal">{tech}</div>
          </div>
        </div>
        {/* info */}
        <div className="px-2 md:px-0 pb-2 md:pb-0">
          <div className="text-lg md:text-xl font-bold md:mt-5 md:mb-1">
            Overview
          </div>
          <div className="text-sm md:text-base">{overview2}</div>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogMedia;
