import { useMemo } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { sections } from "../../data/sections";
import { handleSectionLink } from "../../utils/scrollToSection";
import "../../css/SectionJump.css";

const SectionJump = () => {
  const activeId = useActiveSection();

  const nextSection = useMemo(() => {
    if (activeId === "contato") {
      return { id: "top", label: "Voltar ao inicio" };
    }

    const currentIndex = sections.findIndex((section) => section.id === activeId);
    if (currentIndex === -1) {
      return sections[0];
    }
    return sections[Math.min(currentIndex + 1, sections.length - 1)];
  }, [activeId]);

  if (!nextSection || activeId === "top") {
    return null;
  }

  return (
    <a
      className="section-jump"
      href={`#${nextSection.id}`}
      onClick={(event) => handleSectionLink(event, nextSection.id, "center")}
    >
      <span className="section-jump__label">
        {activeId === "contato" ? nextSection.label : `Proxima: ${nextSection.label}`}
      </span>
      <img
        className="section-jump__icon"
        src="https://cdn-icons-png.flaticon.com/128/7168/7168658.png"
        alt="Ir para a proxima secao"
      />
    </a>
  );
};

export default SectionJump;
