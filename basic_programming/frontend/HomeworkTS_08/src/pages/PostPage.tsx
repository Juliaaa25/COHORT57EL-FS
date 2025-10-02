import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p className="text-center mt-5">Загрузка...</p>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts" className="btn btn-secondary">
        Назад
      </Link>
    </div>
  );
}
