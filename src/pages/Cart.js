import { useContext } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

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
    <>
      <div className="main-content">
        <h1>Cart Details</h1>
        <div className="cart">
          <ul className="cart-details">
            {state.cart.map((product) => (
              <li className="cart-product">
                <img src={product.image} alt={product.title} />
                <div className="cart-desc">
                  <p className="title">{product.title}</p>
                  <p className="price">${product.originalPrice} <span>${product.sellingPrice}</span></p>
                  
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
          <div className="cart-price-details">
            <h1>Price Details </h1>
            <hr />
            <p>
              Price ({totalItemsInCart} Items) <span>{totalOriginalPrice}</span>
            </p>
            <p>
              Discount <span>{totalDiscount}</span>
            </p>
            <hr />
            <p>
              Total amount <span>{totalSellingPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
