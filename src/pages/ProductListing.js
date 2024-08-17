import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

export function ProductListing() {
  const {state} = useContext(ProductContext)
  const totalProducts = state.products.length;

  return (
    <>
      <h1>Meta Products - {totalProducts}</h1>
      <ul className="card-container">
        {
         state.products.map((product) => (

          <ProductCard product={product}/>

        ))}
      </ul>
    </>
  );
}
