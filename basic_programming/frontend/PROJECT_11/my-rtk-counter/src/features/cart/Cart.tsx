import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "./cartSlice";
import styles from "./Cart.module.css";

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Закрытие по клику на фон (если кликнули именно по overlay)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className={styles.title}>Корзина</h2>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />

                  <div className={styles.info}>
                    <h3 className={styles.name}>{item.title}</h3>
                    <p className={styles.price}>${item.price.toFixed(2)}</p>

                    <div className={styles.controls}>
                      <button
                        className={styles.counterBtn}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        aria-label="Decrease"
                      >
                        −
                      </button>

                      <span className={styles.quantity}>{item.quantity}</span>

                      <button
                        className={styles.counterBtn}
                        onClick={() => dispatch(addToCart(item))}
                        aria-label="Increase"
                      >
                        +
                      </button>

                      <button
                        className={`${styles.btn} ${styles.remove}`}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                Итого: ${totalPrice.toFixed(2)}
              </div>

              <div className={styles.footerButtons}>
                <button
                  className={styles.clearBtn}
                  onClick={() => dispatch(clearCart())}
                >
                  Очистить корзину
                </button>

                <button
                  className={styles.checkoutBtn}
                  onClick={() => alert("Checkout placeholder")}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
