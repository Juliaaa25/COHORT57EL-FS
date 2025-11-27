import { useEffect, useState } from "react";
import { fetchProducts, removeProduct, type Product } from "./productsSlice";
import styles from "./ProductsList.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart, decreaseQuantity } from "../cart/cartSlice";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const [rating, setRating] = useState<Record<number, number>>({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles.status}>Loading...</p>;
  if (error) return <p className={styles.status}>{error}</p>;

  // Получаем количество товара из корзины
  const getQuantity = (id: number) => {
    const found = cartItems.find((i) => i.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <div>
      <div className={styles.grid}>
        {items.map((product: Product) => (
          <div key={product.id} className={styles.card}>
            <button
              className={styles.deleteBtn}
              onClick={() => dispatch(removeProduct(product.id))}
            >
              ✕
            </button>

            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />

            <h3 className={styles.title}>{product.title}</h3>

            <p className={styles.price}>${product.price}</p>

            {/* ---- КАСТОМНЫЙ СЧЕТЧИК ---- */}
            <div className={styles.counter}>
              <button
                onClick={() => dispatch(decreaseQuantity(product.id))}
                className={styles.counterBtn}
              >
                −
              </button>

              <span className={styles.quantity}>{getQuantity(product.id)}</span>

              <button
                onClick={() => dispatch(addToCart(product))}
                className={styles.counterBtn}
              >
                +
              </button>
            </div>

            {/* ---- РЕЙТИНГ ---- */}
            <div className={styles.rating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() =>
                    setRating((prev) => ({ ...prev, [product.id]: star }))
                  }
                  className={
                    rating[product.id] >= star ? styles.starActive : styles.star
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => dispatch(addToCart(product))}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
