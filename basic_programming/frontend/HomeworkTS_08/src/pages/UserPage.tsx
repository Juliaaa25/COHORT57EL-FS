import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="text-center mt-5">Загрузка...</p>;

  return (
    <div className="container mt-4">
      <h2>{user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Телефон:</b> {user.phone}
      </p>
      <p>
        <b>Сайт:</b> {user.website}
      </p>
      <Link to="/users" className="btn btn-secondary">
        Назад
      </Link>
    </div>
  );
}
