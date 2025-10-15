import type { JSX } from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* вызываем */}
      <Car brand={"BMW"} color={"black"} image={""} />
      <Car brand={"Lada"} color={"pink"} image={""} />
      <Car brand={"Volga"} color={"red"} image={""} />
      <Car brand={"Mercedes"} color={"green"} image={""} />
      <Car brand={"Honda"} color={"yellow"} image={""} />
      <Bike
        gears={8}
        brand={"Harley Davidson"}
        price={14000}
        image={
          "https://sportishka.com/uploads/posts/2022-04/1650967338_37-sportishka-com-p-chopperi-kharlei-devidson-modelnii-ryad-kr-39.jpg"
        }
      />
    </div>
  );
}
