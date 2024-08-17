import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

export function ProductCard({product}){
  const {dispatch} = useContext(ProductContext)
    return (
        <>
          <li className="product-item card-item">
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <div>
              <button className="card-button" onClick={()=> dispatch({type:'ADD_TO_CART', value:product._id})}>Add to Cart</button>
            </div>
          </li>
        </>
    )
}