import { sections } from "../../data/sections";
import useI18n from "../../hooks/useI18n";
import { scrollToSection, type ScrollAlign } from "../../utils/scrollToSection";
import "../../css/SectionArrows.css";

const getBlock = (id: string): ScrollAlign =>
  id === "top" || id === "projects" ? "start" : "center";

type SectionArrowsProps = {
  sectionId: string;
};

const SectionArrows = ({ sectionId }: SectionArrowsProps) => {
  const { t } = useI18n();
  const currentIndex = sections.findIndex((section) => section.id === sectionId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const previousIndex = (safeIndex - 1 + sections.length) % sections.length;
  const nextIndex = (safeIndex + 1) % sections.length;
  const previousSection = sections[previousIndex];
  const nextSection = sections[nextIndex];
  const previousLabel = t(previousSection.labelKey);
  const nextLabel = t(nextSection.labelKey);

  const navigateTo = (id: string) => {
    scrollToSection(id, getBlock(id));
    window.history.replaceState(null, "", `#${id}`);
    window.dispatchEvent(new CustomEvent("section:navigate", { detail: { id } }));
  };

  return (
    <div className="section-arrows" aria-label={t("sectionArrows.navLabel")}>
      <button
        type="button"
        className="section-arrows__button"
        onClick={() => navigateTo(previousSection.id)}
        aria-label={t("sectionArrows.goTo", { section: previousLabel })}
        data-tooltip={t("sectionArrows.previousTo", { section: previousLabel })}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 5L8 12L15 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className="section-arrows__button"
        onClick={() => navigateTo(nextSection.id)}
        aria-label={t("sectionArrows.goTo", { section: nextLabel })}
        data-tooltip={t("sectionArrows.nextTo", { section: nextLabel })}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SectionArrows;
