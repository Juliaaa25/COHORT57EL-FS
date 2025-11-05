import type SandwichState from "./types/SandwichState";
import type { SandwichAction } from "./types/SandwichAction";

const initialState: SandwichState = {
  ingredients: [],
};

export default function sandwichReducer(
  state: SandwichState = initialState,
  action: SandwichAction
): SandwichState {
  switch (action.type) {
    case "sandwich/add":
      return { ...state, ingredients: [...state.ingredients, action.payload] };

    case "sandwich/reset":
      return { ...state, ingredients: [] };

    default:
      return state;
  }
}
