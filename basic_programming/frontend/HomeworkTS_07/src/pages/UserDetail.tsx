import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div className="card shadow-sm p-4">
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Телефон:</strong> {user.phone}
      </p>
      <p>
        <strong>Компания:</strong> {user.company.name}
      </p>
    </div>
  );
}
