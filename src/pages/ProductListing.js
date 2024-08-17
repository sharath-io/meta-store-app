import { ProductCard } from "../components/ProductCard";
import { products } from "../db/products";
export function ProductListing() {
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
