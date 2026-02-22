import { sections } from "../../data/sections";
import { handleSectionLink } from "../../utils/scrollToSection";
import useI18n from "../../hooks/useI18n";
import "../../css/Header.css";

const Header = () => {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <div className="site-header__content">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(event) => handleSectionLink(event, "top", "center")}
        >
          {t("header.brand")}
        </a>
        <nav className="site-header__nav" aria-label={t("header.navLabel")}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => handleSectionLink(event, section.id, "center")}
            >
              {t(section.labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
