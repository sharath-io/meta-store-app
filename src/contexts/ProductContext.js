import { createContext, useReducer } from "react";
import { products } from "../db/products";

export const ProductContext = createContext();

const reducerFn = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [
            ...state.cart,
            state.products.find((product) => product._id === action.payload),
          ],
        };
      default:
        return state;
    }
  };
  

export function ProductProvider({children}){

    const [state, dispatch] = useReducer(reducerFn, {
        products:products,
        cart:[]
    })

    return (
        <ProductContext.Provider value={{state,dispatch}}>
          {children}
       </ProductContext.Provider>
    )  
}