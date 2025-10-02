import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function CommentPage() {
  const { id } = useParams();
  const [comment, setComment] = useState<Comment | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, [id]);

  if (!comment) return <p className="text-center mt-5">Загрузка...</p>;

  return (
    <div className="container mt-4">
      <h2>{comment.name}</h2>
      <h6 className="text-muted">{comment.email}</h6>
      <p>{comment.body}</p>
      <Link to="/comments" className="btn btn-secondary">
        Назад
      </Link>
    </div>
  );
}
