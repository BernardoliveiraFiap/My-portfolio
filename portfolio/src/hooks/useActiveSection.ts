import { useEffect, useState } from "react";
import { sections } from "../data/sections";

const getElements = () =>
  sections
    .map((section) => document.getElementById(section.id))
    .filter((el): el is HTMLElement => Boolean(el));

const useActiveSection = () => {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const elements = getElements();

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeId;
};

export default useActiveSection;
