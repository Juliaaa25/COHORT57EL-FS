import { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!res.ok) throw new Error("Ошибка загрузки комментариев");

        const data: Comment[] = await res.json();
        setComments(data.slice(0, 20)); // показываем первые 20 для примера
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  if (loading) return <p className="text-primary">Загрузка...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Список комментариев</h2>
      <div className="row">
        {comments.map((c) => (
          <div key={c.id} className="col-md-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{c.email}</h6>
                <p className="card-text">{c.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
