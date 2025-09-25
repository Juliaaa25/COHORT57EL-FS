import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Ошибка загрузки пользователей");

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

  if (loading) return <p className="text-primary">Загрузка...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u.id} className="list-group-item">
            <strong>{u.name}</strong> <br />
            {u.email} <br />
            {u.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
