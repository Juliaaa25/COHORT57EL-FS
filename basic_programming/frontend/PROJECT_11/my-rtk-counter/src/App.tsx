import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./features/products/ProductsList";
import { UsersList } from "./features/users/UsersList";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import Layout from "./features/LayOut/LayOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главный Layout со шапкой, футером и Outlet */}
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route
            index
            element={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "80vh",
                  gap: "20px",
                  padding: "20px",
                  backgroundColor: "#fff5e6",
                }}
              >
                <h1>Добро пожаловать в наш магазин!</h1>
                <p>
                  У нас самые лучшие товары, приятные цены и быстрая доставка!
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  style={{ maxWidth: "400px", width: "100%" }}
                />
                <a
                  href="/products"
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    backgroundColor: "#ff7f50",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    marginTop: "20px",
                  }}
                >
                  Перейти к товарам →
                </a>
              </div>
            }
          />

          {/* Остальные страницы */}
          <Route path="products" element={<ProductsList />} />
          <Route path="users" element={<UsersList />} />
          <Route path="counter" element={<Counter />} />
          <Route path="sandwich" element={<Sandwich />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
