import evening from "../photos/img1.jpeg";
import img2 from "../photos/img2.jpeg";
import coffee from "../photos/img4.jpeg";
import skyTree from "../photos/img5.jpg";
import elvisUke from "../photos/img6.jpg";
import car from "../photos/img7.jpeg";
import building from "../photos/img8.jpeg";
import sky from "../photos/blue_sky.jpg";
import metro from "../photos/img10.jpeg";
import sunset from "../photos/sunset.jpg";
import sunset_guitar from "../photos/sunset_guitar.jpg";
import goat from "../photos/goat.jpg";
import { useEffect, useRef, useState } from "react";

const Hobbies = ({ setActiveSection }) => {
  const sectionRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const videoDivPosition = document.getElementById("videoDiv").offsetTop;
    const photoDivPosition = document.getElementById("photoDiv").offsetTop;

    // Check if the scroll position is at the middle of the screen
    if (scrollPosition >= videoDivPosition + 200) {
      setIsVideoVisible(true);
    } else {
      setIsVideoVisible(false);
    }

    if (scrollPosition >= photoDivPosition + 200) {
      setIsPhotoVisible(true);
    } else {
      setIsPhotoVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("hobbies");
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

  const photographyImage = (img, x, y, isLandscape = false) => (
    <div
      className={`absolute ${x} ${y} hover:z-10 transition-all ease-in-out shadow-md shadow-black rounded-md overflow-hidden cursor-pointer`}
    >
      <img
        className={`${
          isLandscape ? "max-w-36 md:max-w-48" : "max-w-28 md:max-w-36"
        } ${
          isLandscape
            ? "hover:max-w-60 md:hover:max-w-80"
            : "hover:max-w-52 md:hover:max-w-60"
        } h-auto object-cover brightness-75 hover:brightness-100 transition-all ease-in-out`}
        src={img}
      />
    </div>
  );

  return (
    <div
      ref={sectionRef}
      id="hobbies"
      className="bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-400 w-full px-8 md:px-20 pt-10 md:pt-20"
    >
      {/* heading */}
      <div className="mb-5 md:mb-10 text-center">
        <div className="text-4xl leading-normal font-bold text-[#404040] dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Beyond the Code
        </div>
        <div className="text-xs text-center">
          Interests Beyond the Workspace
        </div>
      </div>
      {/* video container */}
      <div
        id="videoDiv"
        className={`w-full flex flex-wrap-reverse md:justify-evenly transition-all duration-700 ease-in-out ${
          isVideoVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-full md:w-1/2 text-sm md:text-base font-normal mt-8 md:my-auto">
          "Playing guitar has been my go to thing over the years. Learning any
          instrument is, in my opinion, the best way of keeping your head on the
          right track. I played in my college band for the first 2 years. In my
          opinion, it was the best way I could've explored college life at the
          early stages. Being in the band also taught me to work within a group
          of mixed opinions. Artists like John Mayer, Pink Floyd, and The
          Beatles have inspired me immensely through their timeless music."
        </div>
        <div
          className="relative bg-[#272727] dark:bg-black px-2 py-2 rounded-[35px] shadow-xl shadow-gray-500 drop-shadow-2xl drop-shadow-gray-500 dark:shadow-black dark:drop-shadow-black 
        max-w-[160px] h-[300px] max-h-[300px] md:max-w-[230px] md:h-[450px] md:max-h-[450px] overflow-hidden mx-auto md:mx-0"
        >
          <video
            className="rounded-[30px] object-cover h-full"
            // src={guitarCover}
            src="https://storage.googleapis.com/tushar-storage-bucket/amberEmbrace.mp4"
            controls
            autoPlay
            muted
            loop
            preload="auto"
          ></video>
          <div className="absolute top-0 left-[50%] -translate-x-[50%] z-10 bg-[#272727] dark:bg-black w-20 h-5 md:w-36 md:h-7 rounded-b-2xl flex justify-start pl-4 items-center">
            <div className="h-2 w-2 bg-[#4f4f4f] rounded-full"></div>
          </div>
          <div className="absolute w-24 h-1 bottom-3 rounded-3xl left-[50%] -translate-x-[50%] bg-[#1f1f1f]"></div>
        </div>
      </div>
      {/* photos container */}
      <div
        id="photoDiv"
        className={`md:flex w-full justify-center transition-all duration-700 ease-in-out ${
          isPhotoVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-full md:w-2/3 md:max-w-[750px] flex flex-wrap py-4 relative min-h-[60vh] md:min-h-[80vh]">
          {photographyImage(coffee, "top-[40%]", "left-[0%]")}
          {photographyImage(building, "top-[10%]", "left-[5%]")}
          {photographyImage(
            sunset,
            "bottom-[15%] md:bottom-[6%]",
            "left-[5%] md:left-[10%]",
            true
          )}
          {photographyImage(evening, "bottom-[10%]", "right-0 md:right-[13%]")}
          {photographyImage(sky, "bottom-[0%]", "right-[35%]", true)}
          {photographyImage(car, "bottom-[18%]", "left-[35%] md:left-[23%]")}
          {photographyImage(
            sunset_guitar,
            "top-[15%]",
            "right-0 md:right-[10%]",
            true
          )}
          {photographyImage(goat, "top-[25%] md:top-[20%]", "left-[28%]")}
          {photographyImage(
            elvisUke,
            "bottom-[35%] md:bottom-[18%]",
            "right-[10%] md:right-[32%]"
          )}
          {photographyImage(skyTree, "top-[2%]", "right-[38%]")}
        </div>
        <div className="w-full md:w-1/3 text-sm md:text-base font-normal flex justify-center items-center mt-5 md:mt-0">
          "I also have a knack for photography, mainly capturing the aesthetics
          of nature and ambient scenes. As an individual, I feel like there's
          something about freezing a moment in time, as when you look back at it
          after some time, it gives you perspective."
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
