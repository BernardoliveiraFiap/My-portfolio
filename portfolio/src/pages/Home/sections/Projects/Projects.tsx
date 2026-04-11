import "../../../../css/Projects.css";
import SectionArrows from "../../../../components/SectionArrows/SectionArrows";
import ProjectButton from "../../../../components/ProjectButton/ProjectButton";
import useI18n from "../../../../hooks/useI18n";
import type { PointerEvent } from "react";

const georiscoProjectImage =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/6f/e9/cd6fe91f-bc75-8cb7-13ce-8fae5536c160/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200ia-75.webp";

const handleMediaPointerMove = (event: PointerEvent<HTMLDivElement>) => {
  const media = event.currentTarget;
  const bounds = media.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width;
  const y = (event.clientY - bounds.top) / bounds.height;
  const rotateY = (x - 0.5) * 9;
  const rotateX = (0.5 - y) * 7;

  media.style.setProperty("--media-rotate-x", `${rotateX.toFixed(2)}deg`);
  media.style.setProperty("--media-rotate-y", `${rotateY.toFixed(2)}deg`);
  media.style.setProperty("--media-glow-x", `${(x * 100).toFixed(2)}%`);
  media.style.setProperty("--media-glow-y", `${(y * 100).toFixed(2)}%`);
};

const resetMediaPointer = (event: PointerEvent<HTMLDivElement>) => {
  const media = event.currentTarget;
  media.style.setProperty("--media-rotate-x", "0deg");
  media.style.setProperty("--media-rotate-y", "0deg");
  media.style.setProperty("--media-glow-x", "50%");
  media.style.setProperty("--media-glow-y", "50%");
};

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
            <div
              className="projects__media"
              onPointerMove={handleMediaPointerMove}
              onPointerLeave={resetMediaPointer}
            >
              <div className="projects__media-shell">
                <div className="projects__media-toolbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  className="projects__media-image"
                  src={georiscoProjectImage}
                  alt={t("projects.georiscoMobileAlt")}
                />
              </div>
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
            <div
              className="projects__media"
              onPointerMove={handleMediaPointerMove}
              onPointerLeave={resetMediaPointer}
            >
              <div className="projects__media-shell">
                <div className="projects__media-toolbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  className="projects__media-image"
                  src={georiscoProjectImage}
                  alt={t("projects.georiscoWebAlt")}
                />
              </div>
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
            <div
              className="projects__media"
              onPointerMove={handleMediaPointerMove}
              onPointerLeave={resetMediaPointer}
            >
              <div className="projects__media-shell">
                <div className="projects__media-toolbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  className="projects__media-image"
                  src="https://ipoolcare.com/wp-content/uploads/2024/05/logo.png"
                  alt={t("projects.ipoolAlt")}
                />
              </div>
            </div>
            
            <h3 className="projects__name">iPool Care</h3>
            <p className="projects__description">
              {t("projects.ipoolDescription")}
            </p>
            <div className="projects__meta">iPool Care</div>
            <div className="projects__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>MSSQL</span>
              <span>Azure</span>
              <span>C#</span>
              <span>.NET</span>
            </div>
            <ProjectButton
              href="https://tracker.ipoolcare.com/auth/login"
              label={t("projects.visitProject")}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
