import { useState, useEffect, type ReactNode } from "react";
import ProductContext, { type ProductType } from "./ProductContext";

interface ProductProviderProps {
  children: ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Ошибка при загрузке:", err));
  }, []);

  const getProductById = (id: number) => products.find((p) => p.id === id);

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
}
