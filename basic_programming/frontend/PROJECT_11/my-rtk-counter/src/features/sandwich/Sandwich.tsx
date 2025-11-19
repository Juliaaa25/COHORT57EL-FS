import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clearSandwich } from "./sandwichSlice";

export const Sandwich = () => {
  const value = useAppSelector((state) => state.sandwich.value);
  // → Получаем строку ингредиентов

  const dispatch = useAppDispatch();
  // → Берём типизированный dispatch

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Сэндвич: {value || "(все съели)"} </h1>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => dispatch(addIngredient("cheese"))}>
          Add cheese
        </button>

        <button onClick={() => dispatch(addIngredient("salami"))}>
          Add salami
        </button>

        <button onClick={() => dispatch(addIngredient("bread"))}>
          Add bread
        </button>

        <button onClick={() => dispatch(clearSandwich())}>
          Clear ingredients
        </button>
      </div>
    </div>
  );
};
