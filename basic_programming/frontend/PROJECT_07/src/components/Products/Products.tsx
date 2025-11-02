import { useEffect, useState, type JSX } from "react";
import Product from "../Products/Product";
import styles from "./Products.module.css";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p className={styles.loading}>Загрузка товаров</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Каталог товаров</h2>
      <div className={styles.grid}>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
