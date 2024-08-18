import { useContext } from "react";
import { toast } from "react-toastify";

import { ProductContext } from "../contexts/ProductContext";

export function CartDetails() {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <ul className="cart-details">
      {state.cart.map((product) => (
        <li className="cart-product">
          <img src={product.image} alt={product.title} />
          <div className="cart-desc">
            <p className="title">{product.title}</p>
            <p className="price">
              <span>${product.originalPrice}</span> ${product.sellingPrice} USD
            </p>

            <div>
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch({ type: "SUB_QTY", payload: product._id })
                }
                disabled={product.qty > 1 ? false : true}
              >
                -
              </button>
              {product.qty}
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch({ type: "ADD_QTY", payload: product._id })
                }
              >
                +
              </button>
            </div>
            <button
              className="btn"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product._id,
                });
                toast.error("item removed from cart");
              }}
            >
              Remove from Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
