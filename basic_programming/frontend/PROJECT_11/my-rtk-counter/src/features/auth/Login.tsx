import { useState } from "react";
import { useLoginUserMutation } from "./authApi";
import styles from "./Auth.module.css";

export default function Login() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userData = await loginUser({ username, password }).unwrap();
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/profile";
    } catch (e) {
      console.log("Ошибка входа", e);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <h1 className={styles.title}>Вход</h1>

        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.button} type="submit">
            {isLoading ? "..." : "Войти"}
          </button>
        </form>

        {error && <p className={styles.error}>Неверные данные</p>}

        <p style={{ marginTop: "12px", fontSize: "14px" }}>
          Тестовые данные: <br />
          username: <b>kminchelle</b> <br />
          password: <b>0lelplR</b>
        </p>
      </div>
    </div>
  );
}
