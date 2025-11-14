import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieEdit from "./MovieEdit";
import type { RootState } from "../../store";
import type Movie from "./types/Movie";
import type { Action } from "./types/Action";
import styles from "./Movie.module.css";

export const Movies = () => {
  const movies = useSelector((state: RootState) => state.movies) as Movie[];
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch<Action>({ type: "movies/delete", payload: id });
  };

  return (
    <div className={styles.moviesContainer}>
      <h2 className={styles.header}>Список фильмов</h2>

      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          {/* —–– Постер —–– */}
          {movie.image && (
            <img
              src={movie.image}
              alt={movie.title}
              className={styles.poster}
            />
          )}

          {/* —–– Текст —–– */}
          <div className={styles.textBlock}>
            <h3 className={styles.title}>{movie.title}</h3>
            <p>
              <strong>Жанр:</strong> {movie.genre}
            </p>
            <p>
              <strong>Страна:</strong> {movie.country}
            </p>
            <p>
              <strong>Год выпуска:</strong> {movie.releaseDate}
            </p>
          </div>

          {/* —–– Кнопки —–– */}
          <div className={styles.movieActions}>
            <button className={styles.deleteBtn}>
              <DeleteIcon onClick={() => handleDelete(movie.id)} />
            </button>

            <MovieEdit id={movie.id} currentTitle={movie.title} />
          </div>
        </div>
      ))}
    </div>
  );
};
