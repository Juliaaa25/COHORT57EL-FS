import { Routes, Route, Link, Navigate } from "react-router-dom";
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";

export default function App() {
  return (
    <div className="container mt-3">
      <nav className="mb-4">
        <Link to="/users" className="btn btn-primary me-2">
          Пользователи
        </Link>
        <Link to="/comments" className="btn btn-secondary">
          Комментарии
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}
