import "../../../../css/Skills.css";
import SectionArrows from "../../../../components/SectionArrows/SectionArrows";
import useI18n from "../../../../hooks/useI18n";

const hardSkillLogos = [
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const softSkillIcons = [
  { name: "Communication", src: "https://api.iconify.design/mdi/chat-processing-outline.svg?color=%23ffffff" },
  { name: "Teamwork", src: "https://api.iconify.design/mdi/account-group-outline.svg?color=%23ffffff" },
  { name: "Organization", src: "https://api.iconify.design/mdi/calendar-check-outline.svg?color=%23ffffff" },
  { name: "Problem Solving", src: "https://api.iconify.design/mdi/lightbulb-on-outline.svg?color=%23ffffff" },
  { name: "Adaptability", src: "https://api.iconify.design/mdi/swap-horizontal-bold.svg?color=%23ffffff" },
  { name: "Learning", src: "https://api.iconify.design/mdi/school-outline.svg?color=%23ffffff" },
];

const Skills = () => {
  const { t } = useI18n();
  const hardList = t("skills.hardList", { returnObjects: true }) as string[];
  const softList = t("skills.softList", { returnObjects: true }) as string[];
  const carouselLogos = [...hardSkillLogos, ...hardSkillLogos];
  const softCarouselIcons = [...softSkillIcons, ...softSkillIcons];

  return (
    <>
      <section className="skills" id="hard-skills">
        <div className="skills__content spawn-item" data-spawn data-spawn-direction="left">
          <div className="section-title-row">
            <h2 className="skills__title">{t("skills.hardTitle")}</h2>
            <SectionArrows sectionId="hard-skills" />
          </div>
          <p className="skills__subtitle">
            {t("skills.hardSubtitle")}
          </p>
          <div className="skills__card">
            <ul>
              {hardList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="skills__carousel-wrap" aria-label="Hard skills logo carousel">
            <div className="skills__logo-carousel" role="presentation">
              <div className="skills__logo-track" role="presentation" aria-hidden="true">
                {carouselLogos.map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="skills__logo-item" aria-label={logo.name}>
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="soft-skills">
        <div
          className="skills__content spawn-item"
          data-spawn
          data-spawn-direction="left"
          data-spawn-delay="90"
        >
          <div className="section-title-row">
            <h2 className="skills__title">{t("skills.softTitle")}</h2>
            <SectionArrows sectionId="soft-skills" />
          </div>
          <p className="skills__subtitle">
            {t("skills.softSubtitle")}
          </p>
          <div className="skills__card">
            <ul>
              {softList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="skills__carousel-wrap" aria-label="Soft skills icon carousel">
            <div className="skills__logo-carousel" role="presentation">
              <div className="skills__logo-track" role="presentation" aria-hidden="true">
                {softCarouselIcons.map((icon, index) => (
                  <div key={`${icon.name}-${index}`} className="skills__logo-item" aria-label={icon.name}>
                    <img src={icon.src} alt={icon.name} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
