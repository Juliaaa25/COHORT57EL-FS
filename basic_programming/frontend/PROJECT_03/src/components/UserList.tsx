import { useEffect, useState } from "react";
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}
const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: IUser[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Список пользователей</h2>
      <div className="row g-3">
        {users.map(({ email, id, name, username }) => (
          <div className="col-12 col-md-6 col-lg-4" key={id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">@{username}</h6>
                <p className="card-text">
                  <strong>Email: </strong> {email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>{error && <>Ошибка при загрузке данных: {error}</>}</div>
    </div>
  );
};
export default UserList;
