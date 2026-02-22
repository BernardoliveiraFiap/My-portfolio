import useActiveSection from "../../hooks/useActiveSection";
import { sections } from "../../data/sections";
import "../../css/Header.css";

const Header = () => {
  const activeId = useActiveSection();

  return (
    <header className="site-header">
      <div className="site-header__content">
        <a className="site-header__brand" href="#top">
          Enzo Oliveira
        </a>
        <nav className="site-header__nav" aria-label="Navegação principal">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeId === section.id ? "is-active" : ""}
              href={`#${section.id}`}
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
