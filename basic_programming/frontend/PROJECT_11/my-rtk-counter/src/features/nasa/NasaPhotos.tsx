import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNasaPhotos } from "./nasaSlice";
import styles from "./nasa.module.css";

const NasaPhotos = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.nasa);

  useEffect(() => {
    dispatch(fetchNasaPhotos());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>NASA Random Photos</h1>

      {loading && <h2>Загрузка</h2>}
      {error && <h2>{error}</h2>}

      <div className={styles.grid}>
        {items.map((photo) => (
          <div className={styles.card} key={photo.date}>
            <img
              className={styles.img}
              src={photo.hdurl || photo.url}
              alt={photo.title}
            />
            <h3 className={styles.cardTitle}>{photo.title}</h3>
            <p className={styles.date}>{photo.date}</p>
            <p className={styles.explanation}>{photo.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaPhotos;

// https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=3
// https://github.com/nasa/apod-api?tab=readme-ov-file#docs
