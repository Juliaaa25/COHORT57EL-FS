import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { type JSX } from "react/jsx-runtime";

type Lang = "en" | "ru";

const texts: Record<
  Lang,
  {
    users: string;
    comments: string;
    posts: string;
    theme: string;
    lang: string;
  }
> = {
  ru: {
    users: "Пользователи",
    comments: "Комментарии",
    posts: "Посты",
    theme: "Сменить тему",
    lang: "Сменить язык",
  },
  en: {
    users: "Users",
    comments: "Comments",
    posts: "Posts",
    theme: "Switch theme",
    lang: "Switch language",
  },
};

export default function Navbar(): JSX.Element {
  const { toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LanguageContext);

  const currentLang: Lang = lang === "ru" ? "ru" : "en";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          React App
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                {texts[currentLang].users}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comments">
                {texts[currentLang].comments}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                {texts[currentLang].posts}
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-light mx-2" onClick={toggleTheme}>
            {texts[currentLang].theme}
          </button>
          <button className="btn btn-warning" onClick={toggleLang}>
            {texts[currentLang].lang}
          </button>
        </div>
      </div>
    </nav>
  );
}
