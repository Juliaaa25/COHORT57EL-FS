import { useState } from "react";
import { useDispatch } from "react-redux";
import type MovieCredentials from "./types/MovieCredentials";

export default function MovieCreation() {
  const dispatch = useDispatch();
  const [form, setForm] = useState<MovieCredentials>({
    title: "",
    genre: "",
    country: "",
    releaseDate: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.genre || !form.country || !form.releaseDate) {
      setError("Все поля должны быть заполнены!");
      return;
    }

    dispatch({ type: "movies/add", payload: form });
    setForm({ title: "", genre: "", country: "", releaseDate: "" });
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 mb-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Добавить фильм</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        name="title"
        placeholder="Название"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <input
        name="genre"
        placeholder="Жанр"
        value={form.genre}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <input
        name="country"
        placeholder="Страна"
        value={form.country}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <input
        name="releaseDate"
        type="date"
        value={form.releaseDate}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Создать
      </button>
    </form>
  );
}
