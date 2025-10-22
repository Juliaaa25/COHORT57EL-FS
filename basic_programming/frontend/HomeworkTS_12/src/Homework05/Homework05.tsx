import type { JSX } from "react";
import RandomDog from "../components/RandomDog/RandomDog";

export default function Homework05(): JSX.Element {
  return (
    <div>
      <h1>Homework 05: useEffect</h1>
      <p>Этот пример показывает, как загружать данные с помощью useEffect.</p>
      <RandomDog />
    </div>
  );
}
