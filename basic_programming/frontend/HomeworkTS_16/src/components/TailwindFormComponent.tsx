import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { updateField, resetForm } from "../store/formReducer";

export default function TailwindFormComponent() {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    dispatch(
      updateField({
        field: e.target.name as keyof typeof form,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Форма отправлена!\nИмя: ${form.name}\nEmail: ${form.email}`);
    dispatch(resetForm());
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Свяжитесь с нами
      </h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Имя"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        />
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Выберите тему</option>
          <option>Вопрос</option>
          <option>Предложение</option>
          <option>Жалоба</option>
        </select>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Сообщение"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
