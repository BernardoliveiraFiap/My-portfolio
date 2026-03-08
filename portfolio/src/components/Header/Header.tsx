import { sections } from "../../data/sections";
import { handleSectionLink, type ScrollAlign } from "../../utils/scrollToSection";
import useI18n from "../../hooks/useI18n";
import ebLogo from "../../assets/eb.png";
import "../../css/Header.css";

const getSectionBlock = (id: string): ScrollAlign =>
  id === "top" || id === "contato" || id === "projects" ? "start" : "center";

const Header = () => {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <div className="site-header__content">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(event) => handleSectionLink(event, "top", "start")}
        >
          <img className="site-header__brand-logo" src={ebLogo} alt={t("header.logoAlt")} />
          <span className="site-header__brand-text">
            {t("header.brandFirst")}{" "}
            <span className="site-header__brand-accent">
              {t("header.brandLast")}
            </span>
          </span>
        </a>
        <nav className="site-header__nav" aria-label={t("header.navLabel")}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) =>
                handleSectionLink(
                  event,
                  section.id,
                  getSectionBlock(section.id)
                )
              }
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
