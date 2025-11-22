import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  selectProducts,
  selectLoading,
  selectError,
  removeProduct,
} from "./productsSlice";
import styles from "./ProductsList.module.css";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Загрузка...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          {/* Красная кнопка удаления */}
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(removeProduct(product.id))}
          >
            ✕
          </button>

          {/* Картинка товара */}
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />

          {/* Название и цена */}
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.price}>{product.price} $</p>
        </div>
      ))}
    </div>
  );
};
