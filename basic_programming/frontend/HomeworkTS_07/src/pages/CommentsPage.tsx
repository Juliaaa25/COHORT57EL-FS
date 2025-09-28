import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CommentsPage() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (
    <div>
      <h2 className="mb-4">Список комментариев</h2>
      <div className="row">
        {comments.map((comment) => (
          <div key={comment.id} className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {comment.email}
                </h6>
                <p className="card-text">{comment.body}</p>
                <Link
                  to={`/comments/${comment.id}`}
                  className="btn btn-outline-primary"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
