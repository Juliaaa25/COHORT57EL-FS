import type { JSX } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Sandwich from "./components/Sandwich/Sandwitch";

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
    </div>
  );
}

export default App;
