import About from "./About";
import Home from "./Home";

const Main = () => {
  return (
    <div className="dark:bg-[#101826]">
      <Home />
      {/* <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div> */}
      <About />
    </div>
  );
};

export default Main;
