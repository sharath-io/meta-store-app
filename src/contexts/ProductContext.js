import { createContext } from "react";
import { products } from "../db/products";

export const ProductContext = createContext();

export function ProductProvider({children}){
    return (
        <ProductContext.Provider value={{products}}>
          {children}
       </ProductContext.Provider>
    )  
}