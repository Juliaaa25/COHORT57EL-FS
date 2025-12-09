import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import counterReducer from "../features/counter/counterSlice";
import sandwichReducer from "../features/sandwich/sandwichSlice";
import nasaReducer from "../features/nasa/nasaSlice";
import { usersApi } from "../features/users/usersApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    cart: cartReducer,
    products: productsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer,
    sandwich: sandwichReducer,
    nasa: nasaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
