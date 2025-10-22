import type { JSX } from "react";
import "./App.css";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import Alcohol from "./components/Alcohol/Alcohol";
import { InputMirror } from "./components/InputMirror/InputMirror";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import Playground from "./components/Playground/Playground";
import UsersPage from "./components/UsersPage/UsersPage";

function App(): JSX.Element {
  return (
    <div>
      <UsersPage />
      <Playground />
      <InputMirror />
      <ThemeSwitcher />
      <Alcohol />
      <Sandwich />
      <CarShop />
      <Counter />
    </div>
  );
}

export default App;
