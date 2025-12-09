import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ExchangeState {
  base: string;
}

const initialState: ExchangeState = {
  base: "USD",
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setBase(state, action: PayloadAction<string>) {
      state.base = action.payload;
    },
  },
});

export const { setBase } = exchangeSlice.actions;
export default exchangeSlice.reducer;
