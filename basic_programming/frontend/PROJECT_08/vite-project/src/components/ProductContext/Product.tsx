import { useParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import styles from "./Product.module.css";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();

  const product = getProductById(Number(id));

  if (!product) {
    return <p className={styles.loading}>Товар не найден...</p>;
  }

  return (
    <div className={styles.details}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.imageLarge}
      />
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className={styles.price}>💰 {product.price} €</p>
      </div>
    </div>
  );
}
