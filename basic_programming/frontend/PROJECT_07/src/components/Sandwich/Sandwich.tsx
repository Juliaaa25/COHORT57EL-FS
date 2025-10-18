import { useState, type JSX } from "react";
import style from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Sandwich : ");

  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread 🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese 🧀`);
  }
  function handleAddBacon(): void {
    setSandwich(`${sandwich} Bacon 🥓 `);
  }
  function handleAddSalad(): void {
    setSandwich(`${sandwich} Salad 🥬`);
  }
  function handleReset(): void {
    setSandwich("Sandwich :");
  }
  return (
    <div className={style.container}>
      <h2>Sandwich</h2>

      <img
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" onClick={handleAddBread} className={style.btn}>
          Add bread
        </button>
        <button type="button" onClick={handleAddCheese} className={style.btn}>
          Add cheese
        </button>
        <button type="button" onClick={handleAddBacon} className={style.btn}>
          Add bacon
        </button>
        <button type="button" onClick={handleAddSalad} className={style.btn}>
          Add salad
        </button>
        <button type="button" onClick={handleReset} className={style.btn}>
          Все съесть
        </button>
      </div>
    </div>
  );
}
