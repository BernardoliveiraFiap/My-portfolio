import "../../../../css/Projects.css";
import SectionArrows from "../../../../components/SectionArrows/SectionArrows";
import ProjectButton from "../../../../components/ProjectButton/ProjectButton";
import useI18n from "../../../../hooks/useI18n";

const Projects = () => {
  const { t } = useI18n();

  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <div className="projects__header spawn-item" data-spawn data-spawn-direction="left">
          <div className="section-title-row">
            <h2 className="projects__title">{t("projects.title")}</h2>
            <SectionArrows sectionId="projects" />
          </div>
          <p className="projects__subtitle">
            {t("projects.subtitle")}
          </p>
        </div>
        <div className="projects__grid">
          <article className="projects__card spawn-item" data-spawn data-spawn-direction="left">
            <div className="projects__media">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/6f/e9/cd6fe91f-bc75-8cb7-13ce-8fae5536c160/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200ia-75.webp"
                alt={t("projects.georiscoMobileAlt")}
              />
            </div>
            <div className="projects__eyebrow">{t("projects.mobileEyebrow")}</div>
            <h3 className="projects__name">GEORISCO Mobile</h3>
            <p className="projects__description">
              {t("projects.georiscoMobileDescription")}
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>AWS</span>
              <span>CI/CD</span>
            </div>
            <div className="projects__actions">
              <ProjectButton
                href="https://play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR"
                label={t("projects.googlePlay")}
              />
              <ProjectButton
                href="https://apps.apple.com/au/app/georisco/id6746808776"
                label={t("projects.appStore")}
              />
            </div>
          </article>
          <article
            className="projects__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="120"
          >
            <div className="projects__media">
              <img
                src="https://georiscoimages.s3.us-east-1.amazonaws.com/images/logos/logo_verde_transparente-30.svg"
                alt={t("projects.georiscoWebAlt")}
              />
            </div>
            <div className="projects__eyebrow">{t("projects.webEyebrow")}</div>
            <h3 className="projects__name">GEORISCO Web</h3>
            <p className="projects__description">
              {t("projects.georiscoWebDescription")}
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>AWS</span>
              <span>DevOps</span>
            </div>
            <ProjectButton
              href="https://georisco.com/"
              label={t("projects.visitProject")}
            />
          </article>
          <article
            className="projects__card spawn-item"
            data-spawn
            data-spawn-direction="left"
            data-spawn-delay="240"
          >
            <div className="projects__media">
              <img
                src="https://ipoolcare.com/wp-content/uploads/2024/05/logo.png"
                alt={t("projects.ipoolAlt")}
              />
            </div>
            
            <h3 className="projects__name">iPool Care</h3>
            <p className="projects__description">
              {t("projects.ipoolDescription")}
            </p>
            <div className="projects__meta">iPool Care</div>
            <div className="projects__tags">
              
            </div>
            <ProjectButton
              href="https://ipoolcare.com/"
              label={t("projects.visitProject")}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
