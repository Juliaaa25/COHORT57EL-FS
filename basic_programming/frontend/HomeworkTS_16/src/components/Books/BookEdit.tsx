import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Action } from "../../types/Action";
import styles from "./Books.module.css";

type Props = {
  id: string;
  currentTitle: string;
};

export default function BookEdit({ id, currentTitle }: Props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(currentTitle);

  const save = () => {
    if (!title.trim()) return;

    dispatch<Action>({
      type: "books/edit",
      payload: { id, data: { title } },
    });

    setOpen(false);
  };

  return open ? (
    <span className={styles.editBox}>
      <input
        className={styles.editInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.saveBtn} onClick={save}>
        Save
      </button>
      <button className={styles.cancelBtn} onClick={() => setOpen(false)}>
        Cancel
      </button>
    </span>
  ) : (
    <button className={styles.editBtn} onClick={() => setOpen(true)}>
      ✎
    </button>
  );
}
