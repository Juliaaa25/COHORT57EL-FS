import type { JSX } from "react";
import Books from "./components/Books/Books";
import BookCreation from "./components/Books/BookCreation";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <h1 className="main-title">Моя библиотека</h1>

      <BookCreation />
      <Books />
    </div>
  );
}

export default App;
