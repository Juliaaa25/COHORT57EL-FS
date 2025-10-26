import { type JSX } from "react";
import Car from "../Car/Car";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* вызываем */}
      <Car brand={"BMW"} color={"pink"} />
      <Car brand={"Volga"} color={"red"} />
      <Car brand={"Tesla"} color={"green"} />
    </div>
  );
}
