import "../../../../css/Education.css";
import SectionArrows from "../../../../components/SectionArrows/SectionArrows";
import useI18n from "../../../../hooks/useI18n";

const graduationImage =
  "https://s3.amazonaws.com/wpfiap/wp-content/uploads/2024/02/share_vest2024.png";

const postGraduateImage = "https://postech.fiap.com.br/imgs/imgshare.png";

const Education = () => {
  const { t } = useI18n();

  return (
    <section className="education" id="education">
      <div className="education__content">
        <div className="education__header spawn-item" data-spawn data-spawn-direction="left">
          <div className="section-title-row">
            <h2 className="education__title">{t("education.title")}</h2>
            <SectionArrows sectionId="education" />
          </div>
          <p className="education__subtitle">{t("education.subtitle")}</p>
        </div>

        <div className="education__grid">
          <article
            className="education__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="40"
          >
            <div className="education__media">
              <img src={graduationImage} alt={t("education.graduation.imageAlt")} loading="lazy" />
              <span className="education__status education__status--completed">
                {t("education.graduation.status")}
              </span>
            </div>
            <div className="education__body">
              <p className="education__kicker">{t("education.graduation.kicker")}</p>
              <h3 className="education__name">{t("education.graduation.name")}</h3>
              <p className="education__description">{t("education.graduation.description")}</p>

              <div className="education__meta">
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.institution")}</span>
                  <span className="education__meta-value">{t("education.graduation.institution")}</span>
                </p>
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.degree")}</span>
                  <span className="education__meta-value">{t("education.graduation.degree")}</span>
                </p>
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.duration")}</span>
                  <span className="education__meta-value">{t("education.graduation.duration")}</span>
                </p>
              </div>

              <a
                className="education__cta"
                href="https://www.fiap.com.br/graduacao/tecnologo/analise-e-desenvolvimento-de-sistemas/"
                target="_blank"
                rel="noreferrer"
              >
                {t("education.visitCourse")}
              </a>
            </div>
          </article>

          <article
            className="education__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="180"
          >
            <div className="education__media">
              <img src={postGraduateImage} alt={t("education.postgraduate.imageAlt")} loading="lazy" />
              <span className="education__status education__status--progress">
                {t("education.postgraduate.status")}
              </span>
            </div>
            <div className="education__body">
              <p className="education__kicker">{t("education.postgraduate.kicker")}</p>
              <h3 className="education__name">{t("education.postgraduate.name")}</h3>
              <p className="education__description">{t("education.postgraduate.description")}</p>

              <div className="education__meta">
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.institution")}</span>
                  <span className="education__meta-value">{t("education.postgraduate.institution")}</span>
                </p>
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.degree")}</span>
                  <span className="education__meta-value">{t("education.postgraduate.degree")}</span>
                </p>
                <p className="education__meta-item">
                  <span className="education__meta-label">{t("education.labels.duration")}</span>
                  <span className="education__meta-value">{t("education.postgraduate.duration")}</span>
                </p>
              </div>

              <a
                className="education__cta"
                href="https://postech.fiap.com.br/curso/devops-e-arquitetura-cloud"
                target="_blank"
                rel="noreferrer"
              >
                {t("education.visitCourse")}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
