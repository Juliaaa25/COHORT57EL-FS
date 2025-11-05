import { createContext } from "react";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductContextType {
  products: ProductType[];
  getProductById: (id: number) => ProductType | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
