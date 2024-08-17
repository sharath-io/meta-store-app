import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductCard } from "../components/ProductCard";

export function Cart() {
  const { state } = useContext(ProductContext);
  console.log(state.cart);
  return (
    <>
      <h1>Cart Page</h1>
      <ul className="card-container">
        {state.cart.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </>
  );
}
