import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment } from "./counterSlice";
import styles from "./Counter.module.css";

export const Counter = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Счётчик: {value}</h1>

      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${styles.plus}`}
          onClick={() => dispatch(increment())}
        >
          +1
        </button>

        <button
          className={`${styles.btn} ${styles.minus}`}
          onClick={() => dispatch(decrement())}
        >
          –1
        </button>
      </div>
    </div>
  );
};
