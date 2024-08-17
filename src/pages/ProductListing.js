import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

export function ProductListing() {
  const {products} = useContext(ProductContext)
  console.log('products here: ', products)
  return (
    <>
      <h1>Product Listing Page</h1>
      <ul className="card-container">
        {
         products.map((product) => (

          <ProductCard product={product}/>

        ))}
      </ul>
    </>
  );
}
