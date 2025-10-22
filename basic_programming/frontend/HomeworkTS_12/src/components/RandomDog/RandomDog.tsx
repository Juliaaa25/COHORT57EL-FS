import { useEffect, useState, type JSX } from "react";
import style from "./RandomDog.module.css";

export default function RandomDog(): JSX.Element {
  const [dogUrl, setDogUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchDog();
  }, []);

  async function fetchDog(): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogUrl(data.message);
      setError("");
    } catch (err) {
      setError("Ошибка при загрузке изображения");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={style.container}>
      <h2>Случайное изображение собаки</h2>

      {loading && <p>Загрузить...</p>}
      {error && <p className={style.error}>{error}</p>}
      {!loading && !error && (
        <img src={dogUrl} alt="собака" className={style.image} />
      )}

      <button onClick={fetchDog} className={style.btn}>
        Загрузить новые
      </button>
    </div>
  );
}
