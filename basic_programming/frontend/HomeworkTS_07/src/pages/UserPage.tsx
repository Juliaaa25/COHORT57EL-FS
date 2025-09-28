import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div className="card p-3">
      <h3>{user.name}</h3>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Телефон:</b> {user.phone}
      </p>
      <p>
        <b>Сайт:</b> {user.website}
      </p>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
