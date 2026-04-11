import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import useSpawnOnScroll from "../../hooks/useSpawnOnScroll";
import type { ThemeMode } from "../../types/theme";

type HomeProps = {
  themeMode: ThemeMode;
  onThemeModeChange: (nextMode: ThemeMode) => void;
};

const Home = ({ themeMode, onThemeModeChange }: HomeProps) => {
  useSpawnOnScroll(themeMode);
  const postHeroClassName =
    themeMode === "light" ? "post-hero post-hero--light" : "post-hero";

  return (
    <>
      <Hero themeMode={themeMode} onThemeModeChange={onThemeModeChange} />
      <div className={postHeroClassName}>
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </div>
    </>
  )
};

export default Home
