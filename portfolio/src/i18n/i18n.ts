import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./translations/pt";
import en from "./translations/en";

export const SUPPORTED_LANGUAGES = ["pt-BR", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
const LANGUAGE_STORAGE_KEY = "portfolio:language";

const getStoredLanguage = (): SupportedLanguage | null => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored as SupportedLanguage)) {
      return stored as SupportedLanguage;
    }
  } catch {
    return null;
  }
  return null;
};

const getInitialLanguage = (): SupportedLanguage => {
  const stored = getStoredLanguage();
  if (stored) {
    return stored;
  }

  if (typeof navigator !== "undefined") {
    const preferred = navigator.language.toLowerCase();
    if (preferred.startsWith("pt")) {
      return "pt-BR";
    }
    if (preferred.startsWith("en")) {
      return "en";
    }
  }

  return DEFAULT_LANGUAGE;
};

export const setStoredLanguage = (language: SupportedLanguage) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    return;
  }
};

const resources = {
  "pt-BR": { translation: pt },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
