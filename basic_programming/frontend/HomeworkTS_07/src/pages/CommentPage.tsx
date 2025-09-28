import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function CommentPage() {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState<Comment | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then(setComment);
  }, [id]);

  if (!comment) return <p>Загрузка...</p>;

  return (
    <div className="card p-3">
      <h4>{comment.name}</h4>
      <h6 className="text-muted">{comment.email}</h6>
      <p>{comment.body}</p>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
