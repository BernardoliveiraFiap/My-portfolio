import "../../css/Footer.css";
import useI18n from "../../hooks/useI18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="site-footer" id="contato">
      <div className="site-footer__content">
        <div className="site-footer__info">
          <h2 className="site-footer__title">{t("footer.title")}</h2>
          <p className="site-footer__text">
            {t("footer.text")}
          </p>
        </div>
        <div className="site-footer__links">
          <a href="mailto:enzooliveira.dev@gmail.com">enzo.o.bernardo5@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/enzoliveiria/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://wa.me/5511988479283" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
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
