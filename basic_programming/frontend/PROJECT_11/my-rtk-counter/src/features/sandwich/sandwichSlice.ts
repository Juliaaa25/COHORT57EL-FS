import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SandwichState {
  value: string; // строка с ингредиентами
}

const initialState: SandwichState = {
  value: "",
};

export const sandwichSlice = createSlice({
  name: "sandwich",
  initialState,
  reducers: {
    // Добавляем ингредиент
    addIngredient(state, action: PayloadAction<string>) {
      state.value = state.value
        ? `${state.value} ${action.payload}`
        : action.payload;
    },

    clearSandwich(state) {
      state.value = "";
    },
  },
});

export const { addIngredient, clearSandwich } = sandwichSlice.actions;
export default sandwichSlice.reducer;
