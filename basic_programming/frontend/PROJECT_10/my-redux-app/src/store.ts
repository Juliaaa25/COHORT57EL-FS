import { combineReducers, createStore } from "redux";
import counterReducer from "./components/counter/counterReducer";
import sandwichReducer from "./components/Sandwich/sandwichReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
  })
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
