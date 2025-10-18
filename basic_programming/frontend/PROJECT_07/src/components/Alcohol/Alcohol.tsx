import { useState, type JSX } from "react";
import style from "./Alcohol.module.css";

export default function Alcohol(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  async function loadAlcohol(): Promise<void> {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const obj = await res.json();
    const { drinks } = obj;
    const { strDrink, strDrinkThumb } = drinks[0];
    setName(strDrink);
    setImage(strDrinkThumb);
  }
  return (
    <div>
      <h1>Alcohol : {name}</h1>
      <div className={style.container}>
        <img src={image} alt="" />
      </div>
      <div className={style.btnContainer}>
        <button type="button" onClick={() => loadAlcohol()}>
          Next image
        </button>
      </div>
    </div>
  );
}
