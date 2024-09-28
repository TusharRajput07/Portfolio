import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="dark:bg-[#101826]">
      <Home />
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>
      <About />
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>

      <Projects />
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>

      <Skills />
      <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div>

      <Contact />
    </div>
  );
};

export default Main;
