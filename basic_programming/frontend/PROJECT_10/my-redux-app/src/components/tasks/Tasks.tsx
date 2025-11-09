import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./Tasks.module.css";

export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  function handleChangeStatus(id: string): void {
    dispatch({ type: "tasks/changeStatus", payload: id });
  }

  function handleRemove(id: string): void {
    dispatch({ type: "tasks/remove", payload: id });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Задачи</h1>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <span
              className={`${styles.text} ${task.isDone ? styles.done : ""}`}
            >
              <b>{task.title}:</b> {task.description}
            </span>
            <DeleteIcon
              onClick={() => handleRemove(task.id)}
              style={{ cursor: "pointer" }}
            />
            {task.isDone ? (
              <CheckBoxIcon
                onClick={() => handleChangeStatus(task.id)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <CheckBoxOutlineBlankIcon
                onClick={() => handleChangeStatus(task.id)}
                style={{ cursor: "pointer" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
