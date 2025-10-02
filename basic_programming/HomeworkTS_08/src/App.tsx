import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import UserPage from "./pages/UserPage";
import Comments from "./pages/Comments";
import CommentPage from "./pages/CommentPage";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:id" element={<CommentPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
