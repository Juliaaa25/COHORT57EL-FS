import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clearSandwich } from "./sandwichSlice";
import styles from "./Sandwich.module.css"; // исправлено

export const Sandwich = () => {
  const ingredients = useAppSelector((state) => state.sandwich.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.fullscreen}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Сэндвич: {ingredients || "(все съели)"}
        </h1>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.cheese}`}
            onClick={() => dispatch(addIngredient("cheese"))}
          >
            Добавить сыр
          </button>

          <button
            className={`${styles.btn} ${styles.salami}`}
            onClick={() => dispatch(addIngredient("salami"))}
          >
            Добавить салями
          </button>

          <button
            className={`${styles.btn} ${styles.bread}`}
            onClick={() => dispatch(addIngredient("bread"))}
          >
            Добавить хлеб
          </button>

          <button
            className={`${styles.btn} ${styles.clear}`}
            onClick={() => dispatch(clearSandwich())}
          >
            Очистить
          </button>
        </div>

        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Сэндвич"
        />
      </div>
    </div>
  );
};
