import { combineReducers, createStore } from "redux";
import booksReducer from "../components/Books/booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
