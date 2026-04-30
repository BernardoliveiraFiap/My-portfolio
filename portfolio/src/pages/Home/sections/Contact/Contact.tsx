import "../../../../css/Contact.css";
import SectionArrows from "../../../../components/SectionArrows/SectionArrows";
import useI18n from "../../../../hooks/useI18n";

const Contact = () => {
  const { t } = useI18n();

  return (
    <section className="contact" id="contato">
      <div className="contact__content">
        <div className="contact__header spawn-item" data-spawn data-spawn-direction="left">
          <div className="section-title-row">
            <h2 className="contact__title">{t("contact.title")}</h2>
            <SectionArrows sectionId="contato" />
          </div>
          <p className="contact__subtitle">{t("contact.subtitle")}</p>
        </div>

        <div className="contact__grid">
          <article
            className="contact__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="20"
          >
            <span className="contact__media" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4.5 7L12 13L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="contact__label">{t("contact.emailLabel")}</span>
            <span className="contact__value">enzo.o.bernardo5@gmail.com</span>
            <a className="contact__card-action" href="mailto:enzo.o.bernardo5@gmail.com">
              {t("contact.sendMessage")}
            </a>
          </article>

          <article
            className="contact__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="140"
          >
            <span className="contact__media" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="8" cy="10" r="1" fill="currentColor" />
                <path d="M8 12V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 16V12.8C12 11.75 12.8 11 13.85 11C14.9 11 15.7 11.75 15.7 12.8V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 13.2V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="contact__label">{t("contact.linkedinLabel")}</span>
            <span className="contact__value">LinkedIn</span>
            <a
              className="contact__card-action"
              href="https://www.linkedin.com/in/enzoliveiria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.sendMessage")}
            </a>
          </article>

          <article
            className="contact__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="240"
          >
            <span className="contact__media" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20C16.42 20 20 16.64 20 12.5C20 8.36 16.42 5 12 5C7.58 5 4 8.36 4 12.5C4 13.95 4.44 15.31 5.2 16.45L4.6 19.2L7.46 18.65C8.7 19.49 10.27 20 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.6 10.2C9.95 12.1 11.4 13.6 13.3 14.05L14.2 13.15C14.45 12.9 14.84 12.82 15.16 12.95L16.45 13.47C16.9 13.65 17.14 14.14 17.02 14.61C16.83 15.35 16.15 15.9 15.37 15.9C11.91 15.9 9.1 13.09 9.1 9.63C9.1 8.85 9.65 8.17 10.39 7.98C10.86 7.86 11.35 8.1 11.53 8.55L12.05 9.84C12.18 10.16 12.1 10.55 11.85 10.8L10.95 11.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="contact__label">{t("contact.whatsappLabel")}</span>
            <span className="contact__value">+55 11 98847-9283</span>
            <a
              className="contact__card-action"
              href="https://wa.me/5511988479283"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.sendMessage")}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;