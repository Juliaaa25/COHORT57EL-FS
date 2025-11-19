export type Action =
  | { type: "books/add"; payload: any }
  | { type: "books/delete"; payload: string }
  | { type: "books/edit"; payload: { id: string; data: any } };
