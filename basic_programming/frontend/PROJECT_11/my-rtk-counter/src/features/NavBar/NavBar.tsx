import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

interface NavBarProps {
  onCartClick: () => void;
}

const NavBar = ({ onCartClick }: NavBarProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/products">Продукты</Link>
        <Link to="/users">Пользователи</Link>
        <Link to="/counter">Счётчик</Link>
        <Link to="/sandwich">Сэндвич</Link>
      </nav>

      <button className={styles.cartBtn} onClick={onCartClick}>
        🛒
      </button>
    </header>
  );
};

export default NavBar;
