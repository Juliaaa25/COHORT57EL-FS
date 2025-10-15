import type { JSX } from "react";
import style from "./Car.module.css";
interface Props {
  brand: string;
  color: string;
  image: string;
}

export default function Car(props: Props): JSX.Element {
  const { brand, color, image } = props;
  return (
    <div style={{ backgroundColor: color, color: "white" }}>
      Brand: {brand} Color: {color}
      Image: <img className={style.image} src={image} alt="" />
    </div>
  );
}
