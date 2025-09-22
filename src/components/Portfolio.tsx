import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Portfolio;