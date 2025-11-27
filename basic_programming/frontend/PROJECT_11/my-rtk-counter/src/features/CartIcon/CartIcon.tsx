import { useAppSelector } from "../../app/hooks";
import { useLocation } from "react-router-dom";
import "./CartIcon.css";

interface CartIconProps {
  onClick: () => void;
}

const CartIcon = ({ onClick }: CartIconProps) => {
  const items = useAppSelector((state) => state.cart.items);
  const location = useLocation();

  // показывать иконку только на странице продуктов
  if (location.pathname !== "/products") return null;

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cartIcon" onClick={onClick}>
      🛒 
      {totalCount > 0 && <span className="badge">{totalCount}</span>}
    </div>
  );
};

export default CartIcon;

// Что в итоге делает строка?
// const items = useAppSelector((state) => state.cart.items);

// useAppSelector вызывает эту функцию-селектор

// Берёт из Redux-хранилища state.cart.items

// Записывает это значение в локальную константу items

// Теперь внутри компонента CartIcon можно использовать items

// 4. Важный момент: подписка на изменения

// useAppSelector не просто один раз берёт значение — он ещё:

// подписывает компонент на изменения этого кусочка state

// если state.cart.items изменится (например, пользователь добавил товар в корзину),
// то:

// CartIcon перерисуется

// items получит новое значение

// количество товаров на иконке обновится

// Это и есть основная магия связки React + Redux.

// количество всех товаров
