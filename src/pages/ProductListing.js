import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

export function ProductListing() {
  const {state} = useContext(ProductContext)
  console.log('from product listing: ', state.products)
  return (
    <>
      <h1>Product Listing Page</h1>
      <ul className="card-container">
        {
         state.products.map((product) => (

          <ProductCard product={product}/>

        ))}
      </ul>
    </>
  );
}
