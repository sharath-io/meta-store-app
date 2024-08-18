import { createContext, useReducer } from "react";

import { products } from "../db/products";
import { cartReducer } from "../reducers/cartReducer";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
