import "../../../../css/Skills.css";
import useI18n from "../../../../hooks/useI18n";

const Skills = () => {
  const { t } = useI18n();
  const hardList = t("skills.hardList", { returnObjects: true }) as string[];
  const softList = t("skills.softList", { returnObjects: true }) as string[];

  return (
    <>
      <section className="skills" id="hard-skills">
        <div className="skills__content">
          <h2 className="skills__title">{t("skills.hardTitle")}</h2>
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
        </div>
      </section>
      <section className="skills" id="soft-skills">
        <div className="skills__content">
          <h2 className="skills__title">{t("skills.softTitle")}</h2>
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
        </div>
      </section>
    </>
  );
};

export default Skills;
