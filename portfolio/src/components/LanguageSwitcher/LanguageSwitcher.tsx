import useI18n from "../../hooks/useI18n";

const LanguageSwitcher = () => {
  const { t, language, setLanguage, languages } = useI18n();

  return (
    <div className="language-switcher" role="group" aria-label={t("header.languageLabel")}>
      {languages.map((option) => (
        <button
          key={option.code}
          className={
            option.code === language
              ? "language-switcher__button is-active"
              : "language-switcher__button"
          }
          type="button"
          onClick={() => setLanguage(option.code)}
          aria-pressed={option.code === language}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
