import React, { type JSX } from "react";
import BooksPage from "./components/Books/Books";

export default function App(): JSX.Element {
  return (
    <div style={{ padding: 24, background: "#f3f4f6", minHeight: "100vh" }}>
      <BooksPage />
    </div>
  );
}
