import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsState {
  list: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
};

// Загрузка продуктов
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return rejectWithValue("Ошибка сервера: " + res.status);
    return await res.json();
  } catch (err) {
    return rejectWithValue("Ошибка сети: " + (err as Error).message);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Удаление товара по id
    removeProduct(state, action: PayloadAction<number>) {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Неизвестная ошибка";
      });
  },
});

export const { removeProduct } = productsSlice.actions;

// Селекторы
export const selectProducts = (state: RootState) => state.products.list;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
