import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Ошибка при загрузке данных");

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="alert alert-danger">Ошибка: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Список пользователей</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> <br />
            {user.email} <br />
            {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
