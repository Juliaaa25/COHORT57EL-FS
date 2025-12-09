// src/features/auth/Profile.tsx
import styles from "./Auth.module.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return <p className={styles.loading}>Нет данных...</p>;

  return (
    <div className={styles.profileBox}>
      <h1 className={styles.profileTitle}>Профиль</h1>

      <img src={user.image} className={styles.avatar} alt="avatar" />

      <p>Имя: {user.firstName}</p>
      <p>Фамилия: {user.lastName}</p>
      <p>Email: {user.email}</p>

      <button
        className={styles.button}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Выйти
      </button>
    </div>
  );
}
