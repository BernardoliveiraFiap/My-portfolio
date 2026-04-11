import "../../css/Footer.css";
import useI18n from "../../hooks/useI18n";
import { handleSectionLink } from "../../utils/scrollToSection";
import type { ThemeMode } from "../../types/theme";

type FooterProps = {
  themeMode: ThemeMode;
};

const Footer = ({ themeMode }: FooterProps) => {
  const { t } = useI18n();
  const className = themeMode === "light" ? "site-footer site-footer--light" : "site-footer";

  return (
    <footer className={className}>
      <div className="site-footer__content">
        <h2 className="site-footer__title">{t("footer.title")}</h2>
        <p className="site-footer__text">{t("footer.text")}</p>
        <a
          className="site-footer__to-top"
          href="#top"
          onClick={(event) => handleSectionLink(event, "top", "start")}
        >
          {t("footer.backToTop")}
        </a>
      </div>
      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {t("footer.copyrightName")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
