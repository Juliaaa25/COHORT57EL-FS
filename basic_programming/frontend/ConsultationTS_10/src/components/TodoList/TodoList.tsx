import { useState, type JSX } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./TodoList.module.css";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  const validationSchema = Yup.object({
    text: Yup.string()
      .transform((v) => (typeof v === "string" ? v.trim() : v))
      .min(3, "Минимум 3 символа")
      .max(50, "Максимум 50 символов")
      .required("Введите задачу"),
  });

  const formik = useFormik({
    initialValues: { text: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: values.text.trim(),
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      resetForm();
    },
  });

  // переключение статуса выполнения
  function toggleCompleted(id: number): void {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function removeTodo(id: number): void {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* заголовок */}
        <h1 className={styles.title}>TodoList</h1>

        {/*форма ввода новой задачи */}
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="text"
            placeholder="Введите новую задачу..."
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.text && formik.errors.text ? styles.inputError : ""
            }`}
            aria-invalid={!!(formik.touched.text && formik.errors.text)}
            aria-describedby="text-error"
          />
          <button type="submit" className={styles.button}>
            Добавить
          </button>
        </form>

        {/* ошибки валидации */}
        {formik.touched.text && formik.errors.text ? (
          <div id="text-error" className={styles.error}>
            {formik.errors.text}
          </div>
        ) : null}

        {/*список задач */}
        {todos.length === 0 ? (
          /* сообщение о пустом списке */
          <p className={styles.empty}>Список пуст</p>
        ) : (
          <ul className={styles.list}>
            {todos.map((todo) => (
              <li key={todo.id} className={styles.item}>
                {/* текст задачи */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleCompleted(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      toggleCompleted(todo.id);
                  }}
                  className={`${styles.text} ${
                    todo.completed ? styles.completed : ""
                  }`}
                  title="Кликните, чтобы переключить статус"
                >
                  {todo.text}
                </span>

                {/* кнопка удаления */}
                <button
                  type="button"
                  onClick={() => removeTodo(todo.id)}
                  className={styles.deleteButton}
                  aria-label={`Удалить задачу ${todo.text}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
