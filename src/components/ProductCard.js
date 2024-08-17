import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const { state,dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <li className="product-item card-item">
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} className="product-img" />
        <div>
          {
            state.cart.find(item => item._id===product._id) 
            ? <button
            className="card-button go-to-cart"
            onClick={()=> navigate('/cart')}>
            Go to Cart
          </button>
          :
          <button
            className="card-button"
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product._id })
            }
          >
            Add to Cart
          </button>}
        </div>
      </li>
    </>
  );
}
