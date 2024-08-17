import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Cart() {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.cart);
  return (
    <>
      <h1>Cart Page</h1>
      <ul className="card-container">
        {state.cart.map((product) => (
          <li className="product-item card-item">
          <p className="title">{product.title}</p>
          <img src={product.image} alt={product.title} className="product-img" />
  
          <p className="category">{product.categoryName}</p>
          <p><span>${product.originalPrice}</span>  $ {product.sellingPrice} USD</p>
          <p>rating: {product.rating}</p>
          <button   className="card-button" onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload:product._id})}>Remove from Cart</button>
  
        </li>
        ))}
      </ul>
    </>
  );
}
