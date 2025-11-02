import { type JSX } from "react";
import styles from "./Product.module.css";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function Product({
  title,
  price,
  description,
  image,
  category,
}: ProductProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>Категория: {category}</p>
      <p className={styles.price}>{price} $</p>
      <p className={styles.desc}>{description}</p>
      <button className={styles.btn}>Добавить в корзину</button>
    </div>
  );
}
