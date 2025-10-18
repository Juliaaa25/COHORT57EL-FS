import { useState, type JSX } from "react";
import style from "./ColorChanger.module.css";

export default function ColorChanger(): JSX.Element {
  const [color, setColor] = useState<string>("white");

  function changeColor(newColor: string): void {
    setColor(newColor);
  }

  return (
    <div className={style.wrapper}>
      <h2>Изменение цвета контейнера</h2>
      <div className={style.container} style={{ backgroundColor: color }}>
        <p>Текущий цвет: {color}</p>
      </div>
      <div className={style.buttons}>
        <button className={style.btn} onClick={() => changeColor("red")}>
          Red
        </button>
        <button className={style.btn} onClick={() => changeColor("green")}>
          Green
        </button>
        <button className={style.btn} onClick={() => changeColor("blue")}>
          Blue
        </button>
      </div>
    </div>
  );
}
