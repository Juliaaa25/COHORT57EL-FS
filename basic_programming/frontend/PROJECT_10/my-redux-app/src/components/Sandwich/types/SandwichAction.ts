export type SandwichAction =
  | { type: "sandwich/add"; payload: string }
  | { type: "sandwich/reset" };
