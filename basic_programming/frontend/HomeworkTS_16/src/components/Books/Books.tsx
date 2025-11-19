import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import type { Action } from "../../types/Action";
import BookCreation from "./BookCreation";
import BookEdit from "./BookEdit";
import type Book from "../../types/Book";
import styles from "./Books.module.css";

export default function Books() {
  const books = useSelector((state: RootState) => state.books) as Book[];
  const dispatch = useDispatch();

  const remove = (id: string) =>
    dispatch<Action>({ type: "books/delete", payload: id });

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>My Library</h2>

      <BookCreation />

      <div className={styles.grid}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            {book.cover ? (
              <img src={book.cover} className={styles.cover} alt={book.title} />
            ) : (
              <div className={styles.noCover}>No cover</div>
            )}

            <button
              className={styles.deleteBtn}
              onClick={() => remove(book.id)}
            >
              ✖
            </button>

            <div className={styles.info}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{book.title}</h3>
                <BookEdit id={book.id} currentTitle={book.title} />
              </div>

              <p>
                <b>Author:</b> {book.author}
              </p>
              <p>
                <b>Genre:</b> {book.genre}
              </p>
              <p>
                <b>Year:</b> {book.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
