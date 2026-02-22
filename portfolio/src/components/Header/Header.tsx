import useActiveSection from "../../hooks/useActiveSection";
import { sections } from "../../data/sections";
import { handleSectionLink } from "../../utils/scrollToSection";
import "../../css/Header.css";

const Header = () => {
  const activeId = useActiveSection();

  return (
    <header className="site-header">
      <div className="site-header__content">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(event) => handleSectionLink(event, "top", "center")}
        >
          Enzo Oliveira
        </a>
        <nav className="site-header__nav" aria-label="Navegação principal">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeId === section.id ? "is-active" : ""}
              href={`#${section.id}`}
              onClick={(event) => handleSectionLink(event, section.id, "center")}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
