import { createContext, useState, type ReactNode } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
