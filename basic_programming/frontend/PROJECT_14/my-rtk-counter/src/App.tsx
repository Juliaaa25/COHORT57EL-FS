import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import { UsersList } from "./features/users/UsersList";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import CartIcon from "./features/CartIcon/CartIcon";
import Weather from "./features/weather/Weather";
import ApodRandom from "./features/apod/ApodRandom";
import ExchangeRates from "./features/exchange/ExchangeRates";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {/* ----- Меню ----- */}
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Главная</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link
                to="/exchange"
                style={{ fontSize: "22px", display: "block", margin: "20px 0" }}
              >
                Exchange
              </Link>

              <Products />
              <CartIcon onClick={() => setShowCart((prev) => !prev)} />
              {showCart && <Cart />}

              <Counter />
              <UsersList />
              <Weather />

              <h1>NASA APOD — 3 random images</h1>
              <ApodRandom />
            </div>
          }
        />
        <Route path="/exchange" element={<ExchangeRates />} />
      </Routes>
    </div>
  );
}

export default App;
