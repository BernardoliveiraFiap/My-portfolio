import "../../../../css/Hero.css";
import matrixImage from "../../../../assets/matrix.png";
import avatarImage from "../../../../assets/file.png";
import { handleSectionLink } from "../../../../utils/scrollToSection";
import { generateCurriculoPdf } from "../../../../utils/curriculo";
import useI18n from "../../../../hooks/useI18n";
import LanguageSwitcher from "../../../../components/LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../../../../components/ThemeToggle/ThemeToggle";
import { useEffect, useState } from "react";
import type { ThemeMode } from "../../../../types/theme";

type HeroProps = {
  themeMode: ThemeMode;
  onThemeModeChange: (nextMode: ThemeMode) => void;
};

const Hero = ({ themeMode, onThemeModeChange }: HeroProps) => {
  const { t, language } = useI18n();
  const isLightMode = themeMode === "light";
  const subtitlePrimary = t("hero.subtitlePrimary");
  const subtitleSecondary = t("hero.subtitleSecondary");
  const [primaryCharsVisible, setPrimaryCharsVisible] = useState(0);
  const [secondaryCharsVisible, setSecondaryCharsVisible] = useState(0);

  useEffect(() => {
    const primaryDelayMs = 60;
    const secondaryDelayMs = 12;
    const loopPauseMs = 10000;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    const typePrimary = (nextLength: number) => {
      timeoutId = setTimeout(() => {
        if (isCancelled) return;
        setPrimaryCharsVisible(nextLength);

        if (nextLength < subtitlePrimary.length) {
          typePrimary(nextLength + 1);
          return;
        }

        typeSecondary(1);
      }, primaryDelayMs);
    };

    const typeSecondary = (nextLength: number) => {
      timeoutId = setTimeout(() => {
        if (isCancelled) return;
        setSecondaryCharsVisible(nextLength);

        if (nextLength < subtitleSecondary.length) {
          typeSecondary(nextLength + 1);
          return;
        }

        timeoutId = setTimeout(() => {
          if (isCancelled) return;
          setPrimaryCharsVisible(0);
          setSecondaryCharsVisible(0);
          typePrimary(1);
        }, loopPauseMs);
      }, secondaryDelayMs);
    };

    timeoutId = setTimeout(() => {
      if (isCancelled) return;
      setPrimaryCharsVisible(0);
      setSecondaryCharsVisible(0);
      typePrimary(1);
    }, 0);

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [subtitlePrimary, subtitleSecondary]);

  const typedPrimary = subtitlePrimary.slice(0, primaryCharsVisible);
  const typedSecondary = subtitleSecondary.slice(0, secondaryCharsVisible);
  const showPrimaryCursor =
    secondaryCharsVisible === 0 && primaryCharsVisible < subtitlePrimary.length;
  const showSecondaryCursor = !showPrimaryCursor;
  const heroClassName = isLightMode ? "hero hero--light" : "hero";

  return (
    <section className={heroClassName} id="top">
      <div className="hero__content spawn-item" data-spawn data-spawn-direction="left">
        <div className="hero__headline">
          <div className="hero__topbar">
            <div className="hero__identity">
              <img
                className="hero__avatar"
                src={avatarImage}
                alt={t("hero.avatarAlt")}
              />
              <h1 className="hero__title">
                Enzo <span className="hero__accent">Bernardo</span>
              </h1>
              <a
                className="hero__linkedin"
                href="https://www.linkedin.com/in/enzoliveiria/"
                target="_blank"
                rel="noreferrer"
                aria-label={t("hero.linkedinLabel")}
              >
                <svg
                  className="hero__linkedin-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12a1.56 1.56 0 0 1 0 3.12ZM5.6 9.68h2.67v8.72H5.6V9.68Zm4.34 0h2.56v1.19h.04c.36-.68 1.23-1.4 2.53-1.4c2.7 0 3.2 1.77 3.2 4.08v4.85h-2.67V14.1c0-1.03-.02-2.35-1.43-2.35c-1.43 0-1.65 1.12-1.65 2.28v4.37H9.94V9.68Z"
                  />
                </svg>
              </a>
            </div>
            <div className="hero__language-float">
              <LanguageSwitcher />
              <ThemeToggle themeMode={themeMode} onThemeModeChange={onThemeModeChange} />
            </div>
          </div>
          <div className="hero__actions">
            <button
              className="hero__button"
              type="button"
              onClick={() => generateCurriculoPdf(language)}
            >
              <svg
                className="hero__button-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10l5 5l5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t("hero.downloadResume")}
            </button>
            <a
              className="hero__button hero__button--whatsapp"
              href="https://wa.me/5511988479283"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="hero__button-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 20c4.42 0 8-3.36 8-7.5S16.42 5 12 5s-8 3.36-8 7.5c0 1.45.44 2.81 1.2 3.95L4.6 19.2l2.86-.55C8.7 19.49 10.27 20 12 20Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.6 10.2c.35 1.9 1.8 3.4 3.7 3.85l.9-.9c.25-.25.64-.33.96-.2l1.29.52c.45.18.69.67.57 1.14c-.19.74-.87 1.29-1.65 1.29c-3.46 0-6.27-2.81-6.27-6.27c0-.78.55-1.46 1.29-1.65c.47-.12.96.12 1.14.57l.52 1.29c.13.32.05.71-.2.96l-.9.9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t("hero.hireMe")}
            </a>
            <a
              className="hero__button"
              href="#certifications"
              onClick={(event) => handleSectionLink(event, "certifications", "center")}
            >
              {t("hero.viewCertifications")}
            </a>
            <a
              className="hero__button"
              href="#projects"
              onClick={(event) => handleSectionLink(event, "projects", "start")}
            >
              {t("hero.viewProjects")}
            </a>
          </div>
        </div>
        <p className="hero__subtitle hero__subtitle--type hero__subtitle--type-primary" aria-label={subtitlePrimary}>
          <span className="hero__subtitle-ghost" aria-hidden="true">{subtitlePrimary}</span>
          <span
            className={`hero__subtitle-typing${showPrimaryCursor ? " is-cursor-active" : ""}`}
            aria-hidden="true"
          >
            {typedPrimary}
            {showPrimaryCursor ? <span className="hero__type-cursor">|</span> : null}
          </span>
        </p>
        <p className="hero__subtitle hero__subtitle--type hero__subtitle--type-secondary" aria-label={subtitleSecondary}>
          <span className="hero__subtitle-ghost" aria-hidden="true">{subtitleSecondary}</span>
          <span
            className={`hero__subtitle-typing${showSecondaryCursor ? " is-cursor-active" : ""}`}
            aria-hidden="true"
          >
            {typedSecondary}
            {showSecondaryCursor ? <span className="hero__type-cursor">|</span> : null}
          </span>
        </p>
      </div>
      {isLightMode ? (
        <div className="hero__light-panel spawn-item" data-spawn data-spawn-direction="left" data-spawn-delay="120">
          <span className="hero__light-kicker">{t("hero.lightKicker")}</span>
          <h2 className="hero__light-title">{t("hero.lightTitle")}</h2>
          <p className="hero__light-text">{t("hero.lightText")}</p>
          <div className="hero__light-links">
            <a
              className="hero__light-link"
              href="#hard-skills"
              onClick={(event) => handleSectionLink(event, "hard-skills", "center")}
            >
              {t("nav.hardSkills")}
            </a>
            <a
              className="hero__light-link"
              href="#soft-skills"
              onClick={(event) => handleSectionLink(event, "soft-skills", "center")}
            >
              {t("nav.softSkills")}
            </a>
            <a
              className="hero__light-link"
              href="#projects"
              onClick={(event) => handleSectionLink(event, "projects", "start")}
            >
              {t("nav.projects")}
            </a>
          </div>
        </div>
      ) : (
        <div
          className="hero__image-wrap spawn-item"
          data-spawn
          data-spawn-direction="left"
          data-spawn-delay="120"
        >
          <img
            className="hero__image"
            src={matrixImage}
            alt={t("hero.matrixAlt")}
          />
          <p className="hero__prompt hero__prompt--overlay" aria-label={t("hero.prompt")}>
            <span className="hero__prompt-size" aria-hidden="true">
              {t("hero.prompt")}
            </span>
            <span className="hero__prompt-track" aria-hidden="true">
              <span className="hero__prompt-item">{t("hero.prompt")}</span>
              <span className="hero__prompt-item">{t("hero.prompt")}</span>
            </span>
          </p>
          <a
            className="hero__hotspot hero__hotspot--red"
            href="#hard-skills"
            data-label={t("nav.hardSkills")}
            aria-label={t("hero.hardSkillsLink")}
            onClick={(event) => handleSectionLink(event, "hard-skills", "center")}
          />
          <a
            className="hero__hotspot hero__hotspot--blue"
            href="#soft-skills"
            data-label={t("nav.softSkills")}
            aria-label={t("hero.softSkillsLink")}
            onClick={(event) => handleSectionLink(event, "soft-skills", "center")}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;