import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

type Lang = "en" | "ru";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const currentLang: Lang = lang === "ru" ? "ru" : "en";

  const texts = {
    ru: { title: "Комментарии", open: "Открыть" },
    en: { title: "Comments", open: "Open" },
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{texts[currentLang].title}</h2>
      <div className="row">
        {comments.map((c) => (
          <div key={c.id} className="col-md-4 mb-3">
            <div
              className={`card ${
                theme === "dark"
                  ? "bg-secondary text-light"
                  : "bg-white text-dark"
              }`}
            >
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{c.email}</h6>
                <p className="card-text">{c.body}</p>
                <Link to={`/comments/${c.id}`} className="btn btn-primary">
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
