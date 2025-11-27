import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Cart from "../cart/Cart";

const Layout = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <NavBar onCartClick={() => setShowCart((prev) => !prev)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <main
        style={{
          minHeight: "calc(100vh - 120px)", // header + footer
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "#fff8f0",
          width: "100%", // растягиваем на всю ширину
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "16px",
          backgroundColor: "#ffedd5",
          fontWeight: "600",
        }}
      >
        © 2025 Все права защищены | Demo Shop
      </footer>
    </>
  );
};

export default Layout;
