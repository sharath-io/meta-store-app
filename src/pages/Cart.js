import { useContext } from "react";

import { EmptyCart } from "../components/EmptyCart";
import { CartDetails } from "../components/CartDetails";
import { ProductContext } from "../contexts/ProductContext";
import { CartPriceDetails } from "../components/CartPriceDetails";

export function Cart() {
  const { state } = useContext(ProductContext);

  return (
    <>
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="main-content">
          <h1>Cart Details</h1>
          <div className="cart">
            <CartDetails />
            <CartPriceDetails />
          </div>
        </div>
      )}
    </>
  );
}
