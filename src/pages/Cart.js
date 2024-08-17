import { useContext } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate()

  return (
    <>
    {
      state.cart.length ===0 
      ? <div> 
          <h1>Empty Cart</h1>
          <button className="card-button shop-products"  onClick={() => navigate("/")}>Shop Products</button>

        </div>
      : <div>
      
      <h1>Cart Page</h1>
      <div className="cart-component">
      <ul className="cart card-container">
        {state.cart.map((product) => (
          <li className="product-item card-item" key={product._id}>
          <p className="title">{product.title}</p>
          <img src={product.image} alt={product.title} className="product-img" />
  
          <p className="category">{product.categoryName}</p>
          <p><span>${product.originalPrice}</span>  $ {product.sellingPrice} USD</p>
          <p>rating: {product.rating}</p>

          <div>
            <button 
               className="card-button go-to-cart"
                onClick={()=> dispatch({type:"SUB_QTY", payload:product._id})}
                 disabled={product.qty > 1 ? false : true}
            >-</button>
               {product.qty}
            <button className="card-button go-to-cart" onClick={()=> dispatch({type:"ADD_QTY", payload:product._id})}>+</button>
          </div>
          <button   className="card-button" onClick={()=>{
           dispatch({type:'REMOVE_FROM_CART', payload:product._id});
           toast.error('item removed from cart');  
        }}>Remove from Cart</button>
  
        </li>
        ))}
      </ul>
      <div className="cart-summary">
          <h2>Total Cart : </h2>
          <ul>
            {
              state.cart.map(product => <li className="cart-price-summary">
                <p>{product.title} </p>
                <p>Qty : {product.qty}</p>
                <p>- {product.sellingPrice}</p>
              </li>)
            }
          </ul>
          <hr/>
          <h2>Total Price : {state.cart.reduce((acc,curr) => acc+Number(curr.sellingPrice * curr.qty),0)}</h2>
      </div>
      </div>
      </div>
    }
    </>
  );
}
