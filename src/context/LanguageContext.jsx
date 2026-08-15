import { createContext, useContext, useState } from "react";
import { STRINGS } from "../i18n/translations.js";

const LanguageContext = createContext(null);

function readInitialLang() {
  try {
    const saved = localStorage.getItem("educapsy-lang");
    return saved === "kr" ? "kr" : "fr";
  } catch {
    return "fr";
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  const setLang = (nextLang) => {
    setLangState(nextLang);
    try {
      localStorage.setItem("educapsy-lang", nextLang);
    } catch {
      // localStorage indisponible (navigation privée, etc.) — on continue sans persister
    }
  };

  const value = { lang, setLang, t: STRINGS[lang] };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un <LanguageProvider>");
  }
  return ctx;
}
