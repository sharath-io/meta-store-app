import { useContext } from "react";
import { toast } from "react-toastify";

import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <li className="product-item">
        <p className="title">{product.title}</p>
        <img src={product.image} alt={product.title} className="product-img" />

        <p className="category">{product.categoryName}</p>
        <p className="price"><span>${product.originalPrice}</span>  ${product.sellingPrice} USD</p>
        <p>rating: {product.rating}</p>

        <div>
          {state.cart.find((item) => item._id === product._id) ? (
            <button
              className="btn btn-primary"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="btn"
              onClick={() =>{
                dispatch({ type: "ADD_TO_CART", payload: product._id });
                toast.success('item added to cart');   
              }}
            >
              Add to Cart
            </button>
          )}
        </div>

      </li>
    </>
  );
}
