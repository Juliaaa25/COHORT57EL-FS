// src/components/Sandwich/Sandwich.tsx
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

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
    <div>
      <h2>Сделай свой бутерброд</h2>

      <button onClick={() => addIngredient("хлеб")}>Добавить хлеб</button>
      <button onClick={() => addIngredient("сыр")}>Добавить сыр</button>
      <button onClick={() => addIngredient("колбаса")}>Добавить колбасу</button>
      <button onClick={resetSandwich}>Очистить</button>

      <p>Бутерброд: {ingredients.join(" ") || "все съели"}</p>
    </div>
  );
}
