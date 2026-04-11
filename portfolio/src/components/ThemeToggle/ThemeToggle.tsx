import useI18n from "../../hooks/useI18n";
import type { ThemeMode } from "../../types/theme";

type ThemeToggleProps = {
  themeMode: ThemeMode;
  onThemeModeChange: (nextMode: ThemeMode) => void;
};

const ThemeToggle = ({ themeMode, onThemeModeChange }: ThemeToggleProps) => {
  const { t } = useI18n();

  return (
    <div className="theme-switcher" role="group" aria-label={t("header.themeLabel")}>
      <button
        type="button"
        className={themeMode === "dark" ? "theme-switcher__button is-active" : "theme-switcher__button"}
        onClick={() => onThemeModeChange("dark")}
        aria-pressed={themeMode === "dark"}
      >
        {t("header.themeDark")}
      </button>
      <button
        type="button"
        className={themeMode === "light" ? "theme-switcher__button is-active" : "theme-switcher__button"}
        onClick={() => onThemeModeChange("light")}
        aria-pressed={themeMode === "light"}
      >
        {t("header.themeLight")}
      </button>
    </div>
  );
};

export default ThemeToggle;
