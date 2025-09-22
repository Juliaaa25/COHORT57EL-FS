import Car from "../Car/Car";

import { type JSX } from "react";

export default function Carshop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand={"Mercedes"} color={"black"} />
      <Car brand={"Tesla"} color={"green"} />
      <Car brand={"BMW"} color={"pink"} />
      <Car brand={"Lada"} color={"violet"} />
      <Car brand={"Audi"} color={"yellow"} />
      <Car brand={"Honda"} color={"red"} />
      <Car brand={"Kia"} color={"blue"} />
    </div>
  );
}
