import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Action } from "../../types/Action";
import type BookCredentials from "../../types/BookCredentials";
import styles from "./Books.module.css";

export default function BookCreation() {
  const dispatch = useDispatch();
  const [form, setForm] = useState<BookCredentials>({
    title: "",
    author: "",
    genre: "",
    year: "",
    cover: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    dispatch<Action>({
      type: "books/add",
      payload: { ...form, id: crypto.randomUUID() },
    });

    setForm({ title: "", author: "", genre: "", year: "", cover: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        name="author"
        value={form.author}
        placeholder="Author"
        onChange={handleChange}
      />
      <input
        name="genre"
        value={form.genre}
        placeholder="Genre"
        onChange={handleChange}
      />
      <input
        name="year"
        value={form.year}
        placeholder="Year"
        onChange={handleChange}
      />
      <input
        name="cover"
        value={form.cover}
        placeholder="Cover URL"
        onChange={handleChange}
      />

      <button type="submit" className={styles.addBtn}>
        Add
      </button>
    </form>
  );
}
