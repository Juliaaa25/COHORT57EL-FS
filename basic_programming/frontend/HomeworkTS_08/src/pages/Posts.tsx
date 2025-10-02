import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

type Lang = "en" | "ru";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const currentLang: Lang = lang === "ru" ? "ru" : "en";

  const texts = {
    ru: { title: "Посты", open: "Открыть" },
    en: { title: "Posts", open: "Open" },
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{texts[currentLang].title}</h2>
      <div className="row">
        {posts.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div
              className={`card ${
                theme === "dark"
                  ? "bg-secondary text-light"
                  : "bg-white text-dark"
              }`}
            >
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.body.slice(0, 100)}...</p>
                <Link to={`/posts/${p.id}`} className="btn btn-primary">
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
