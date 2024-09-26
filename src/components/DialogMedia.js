import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery, useTheme } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import NETFLIX_SS from "../utils.js/netflixSS.png";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogMedia = ({ open, handleClose, media, isMovie, trailer }) => {
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
      <div className="w-full md:w-[65vw]  text-[#404040] bg-[#f0f0f0] p-6 relative dark:bg-[#101826] dark:text-gray-200">
        <CancelIcon
          className="absolute top-3 right-3 text-[#404040] cursor-pointer z-20"
          onClick={handleClose}
          //   fontSize={isLarge ? "large" : "medium"}
          fontSize="large"
        />
        {/* image and name */}
        <div className="flex mb-5 gap-4">
          <div className="w-3/5 ">
            <img className="w-full rounded-md" src={NETFLIX_SS} />
          </div>
          <div className="w-2/5 flex flex-col">
            <div className="text-5xl font-bold dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
              Rock Paper Scissors
            </div>
            <div className="text-xl font-bold mb-1 mt-auto">Tech Stack</div>
            <div className="text-sm mb-2 font-normal">
              React.js | Firebase Auth | Redux | Tailwind CSS | TMDB APIs |
              openAI APIs
            </div>
          </div>
        </div>
        {/* info */}
        <div>
          <div className="text-xl font-bold mt-5 mb-1">Overview</div>
          <div>
            developed a Netflix clone app using React.js, seamlessly integrating
            TMDB APIs to provide a rich catalog of movies and TV shows.
            implemented Google Firebase to ensure secure and reliable user
            authentication and authorization. enhanced user experience by adding
            features such as the ability to save movies to a watch later list
            and track liked movies. used openAI APIs for movies and TV shows
            recommendation. developed features such as search functionality, and
            responsive design using Tailwind CSS.
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogMedia;
