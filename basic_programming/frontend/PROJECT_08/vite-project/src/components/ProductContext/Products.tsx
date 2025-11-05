import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";
import styles from "./Product.module.css";

export default function Products() {
  const { products } = useProducts();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🛒 Товары из FakeStoreAPI</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>{product.price} €</p>
            <Link to={`/product/${product.id}`} className={styles.link}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
