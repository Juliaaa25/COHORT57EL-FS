import type { JSX } from "react";
import "./App.css";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import Alcohol from "./components/Alcohol/Alcohol";

function App(): JSX.Element {
  return (
    <div>
      <Alcohol />
      <Sandwich />
      <CarShop />
      <Counter />
    </div>
  );
}

export default App;
