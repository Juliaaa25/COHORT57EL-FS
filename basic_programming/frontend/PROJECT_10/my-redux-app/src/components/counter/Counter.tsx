import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();

  function handlePlus(): void {
    dispatch({ type: "counter/plus", payload: 1 });
  }

  function handleMinus(): void {
    dispatch({ type: "counter/minus", payload: 1 });
  }

  function handleReset(): void {
    dispatch({ type: "counter/reset" });
  }

  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.value}>{counter}</div>

      <div className={styles.buttons}>
        <button type="button" className={styles.button} onClick={handlePlus}>
          +
        </button>

        <button type="button" className={styles.button} onClick={handleMinus}>
          -
        </button>
      </div>

      <button
        type="button"
        className={`${styles.button} ${styles.reset}`}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
