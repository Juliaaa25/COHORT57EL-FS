import type Book from "../../types/Book";
import type { Action } from "../../types/Action";

const initialState: Book[] = [];

export default function booksReducer(
  state = initialState,
  action: Action
): Book[] {
  switch (action.type) {
    case "books/add":
      return [...state, action.payload];

    case "books/delete":
      return state.filter((b) => b.id !== action.payload);

    case "books/edit":
      return state.map((b) =>
        b.id === action.payload.id ? { ...b, ...action.payload.data } : b
      );

    default:
      return state;
  }
}
