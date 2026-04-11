import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import type { ThemeMode } from "./types/theme";

const THEME_STORAGE_KEY = "portfolio-theme-mode";

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedThemeMode === "light" ? "light" : "dark";
};

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getInitialThemeMode());

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    document.body.classList.toggle("theme-light", themeMode === "light");

    return () => {
      document.body.classList.remove("theme-light");
    };
  }, [themeMode]);

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Home themeMode={themeMode} onThemeModeChange={setThemeMode} />
      </main>
      <Footer themeMode={themeMode} />
    </div>
  )
};

export default App
