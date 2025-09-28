import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="container-fullscreen">
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}
