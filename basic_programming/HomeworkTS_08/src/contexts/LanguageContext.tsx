import { createContext, useState, type ReactNode } from "react";

export const LanguageContext = createContext({
  lang: "ru",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("ru");

  const toggleLang = () => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
