import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting)
  // Обновление (updating)
  // Разборка (unmounting)

  function handlePlus(): void {
    setCounter(counter + 1);
  }

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  function handleAddHundred(): void {
    setCounter(counter + 100);
  }

  function handleReset(): void {
    setCounter(0);
  }

  return (
    <div className={style.wrapper}>
      <h1>Добавление денег 💶</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt="Euro bills"
        className={style.image}
      />
      <div className={`${style.container} ${style.containerClass}`}>
        <button type="button" onClick={handlePlus} className={style.btn}>
          +1 евро
        </button>

        <button type="button" onClick={handleAddHundred} className={style.btn}>
          +100 евро
        </button>

        <span className={style.counter} style={{ color: "red" }}>
          {counter} €
        </span>

        <button type="button" onClick={handleMinus} className={style.btn}>
          -1 евро
        </button>

        <button type="button" onClick={handleReset} className={style.btnReset}>
          Очистить
        </button>
      </div>
    </div>
  );
}