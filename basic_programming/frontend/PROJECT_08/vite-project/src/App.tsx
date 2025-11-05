import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Alcohol from "./components/Alcohol/Alcohol";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UsersPage/UserPage";
import Sandwich from "./components/Sandwich/Sandwich";

// 🛒 Импорт контекста и страниц товаров
import ProductProvider from "./components/ProductContext/ProductProvider";
import Products from "./components/ProductContext/Products";
import Product from "./components/ProductContext/Product";

function App(): JSX.Element {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          {/* Основной layout */}
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="alcohol" element={<Alcohol />} />
            <Route path="carshop" element={<CarShop />} />
            <Route path="counter" element={<Counter />} />
            <Route path="userspage" element={<UsersPage />} />
            <Route path="userspage/:userId" element={<UserPage />} />
            <Route path="sandwich" element={<Sandwich />} />

            {/* 🛍️ Маршруты для товаров */}
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
