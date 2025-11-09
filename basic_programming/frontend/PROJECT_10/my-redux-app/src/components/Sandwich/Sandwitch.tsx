import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );

  function addIngredient(ingredient: string): void {
    dispatch({ type: "sandwich/add", payload: ingredient });
  }

  function resetSandwich(): void {
    dispatch({ type: "sandwich/reset" });
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Сделай свой бутерброд</h2>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => addIngredient("хлеб")}>
          Хлеб
        </button>
        <button className={styles.button} onClick={() => addIngredient("сыр")}>
          Сыр
        </button>
        <button
          className={styles.button}
          onClick={() => addIngredient("колбаса")}
        >
          Колбаса
        </button>
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={resetSandwich}
        >
          Очистить
        </button>
      </div>

      <p className={styles.output}>
        Бутерброд: {ingredients.join(" ") || "все съели"}
      </p>
    </div>
  );
}
