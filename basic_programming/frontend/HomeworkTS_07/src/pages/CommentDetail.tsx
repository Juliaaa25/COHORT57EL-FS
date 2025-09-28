import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CommentDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then(setComment);
  }, [id]);

  if (!comment) return <p>Загрузка...</p>;

  return (
    <div className="card shadow-sm p-4">
      <h2>{comment.name}</h2>
      <p>
        <strong>Email:</strong> {comment.email}
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
