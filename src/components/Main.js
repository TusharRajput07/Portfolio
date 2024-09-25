import About from "./About";
import Home from "./Home";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="dark:bg-[#101826]">
      <Home />
      {/* <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div> */}
      <About />
      <Skills />
    </div>
  );
};

export default Main;
