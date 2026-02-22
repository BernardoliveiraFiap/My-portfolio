import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  setStoredLanguage,
  type SupportedLanguage,
} from "../i18n/i18n";

const normalizeLanguage = (language: string): SupportedLanguage => {
  if (SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)) {
    return language as SupportedLanguage;
  }

  if (language.toLowerCase().startsWith("pt")) {
    return "pt-BR";
  }

  if (language.toLowerCase().startsWith("en")) {
    return "en";
  }

  return DEFAULT_LANGUAGE;
};

const useI18n = () => {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.language);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const languages = useMemo(
    (): { code: SupportedLanguage; label: string }[] => [
      { code: "pt-BR", label: "PT" },
      { code: "en", label: "EN" },
    ],
    []
  );

  const setLanguage = (next: SupportedLanguage) => {
    if (next !== language) {
      i18n.changeLanguage(next);
    }
  };

  return { t, language, setLanguage, languages };
};

export default useI18n;
