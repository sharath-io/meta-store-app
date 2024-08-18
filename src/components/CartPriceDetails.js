import { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

export function CartPriceDetails() {
  const { state } = useContext(ProductContext);
  const totalItemsInCart = state.cart.reduce((acc, curr) => acc + curr.qty, 0);

  const totalOriginalPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.originalPrice * curr.qty),
    0
  );
  const totalSellingPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.sellingPrice * curr.qty),
    0
  );
  const totalDiscount = totalOriginalPrice - totalSellingPrice;
  return (
    <div className="cart-price-details">
      <h1>Price Details </h1>
      <hr />
      <p>
        Price ({totalItemsInCart} Items) <span>${totalOriginalPrice}</span>
      </p>
      <p>
        Discount <span>- ${totalDiscount}</span>
      </p>
      <hr />
      <p>
        Total amount <span>${totalSellingPrice}</span>
      </p>
    </div>
  );
}
