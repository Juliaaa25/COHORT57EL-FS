import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

type Lang = "en" | "ru";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const currentLang: Lang = lang === "ru" ? "ru" : "en";

  const texts = {
    ru: { title: "Пользователи", open: "Открыть" },
    en: { title: "Users", open: "Open" },
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{texts[currentLang].title}</h2>
      <div className="row">
        {users.map((u) => (
          <div key={u.id} className="col-md-4 mb-3">
            <div
              className={`card ${
                theme === "dark"
                  ? "bg-secondary text-light"
                  : "bg-white text-dark"
              }`}
            >
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{u.email}</h6>
                <Link to={`/users/${u.id}`} className="btn btn-primary">
                  {texts[currentLang].open}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
