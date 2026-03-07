import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import Contact from "./sections/Contact/Contact";
import useSpawnOnScroll from "../../hooks/useSpawnOnScroll";

const Home = () => {
  useSpawnOnScroll();

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
};

export default Home
