import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          My App
        </NavLink>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Пользователи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comments">
                Комментарии
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
