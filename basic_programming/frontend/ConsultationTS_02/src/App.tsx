import type { JSX } from "react";
import "./App.css";
import Carshop from "./components/CarShop/CarShop";
import Sandwich from "./components/Sandwich/Sandwich";

function App(): JSX.Element {
  return (
    <div>
      <Carshop />
      <Sandwich />
    </div>
  );
}

export default App;
