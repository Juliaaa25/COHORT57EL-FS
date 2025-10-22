import type { JSX } from "react";
import "./App.css";
import { InputMirror } from "./components/InputMirror/InputMirror";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
export default function App(): JSX.Element {
  return (
    <>
      <InputMirror />
      <ThemeSwitcher />
      <ThemeSwitcher />
      <InputMirror />
    </>
  );
}
