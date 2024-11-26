import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hobbies from "./Hobbies";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { useState } from "react";

const Main = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="dark:bg-[#101826]">
      <Header activeSection={activeSection} />

      <Home setActiveSection={setActiveSection} />
      {/* <div className="h-[0.3px] w-[95vw] mx-auto bg-[#a34b74]"></div> */}
      <About setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Hobbies setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
};

export default Main;
