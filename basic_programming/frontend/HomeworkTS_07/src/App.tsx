import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import UserDetail from "./pages/UserDetail";
import CommentsPage from "./pages/CommentsPage";
import CommentDetail from "./pages/CommentDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="comments" element={<CommentsPage />} />
        <Route path="comments/:id" element={<CommentDetail />} />
      </Route>
    </Routes>
  );
}
