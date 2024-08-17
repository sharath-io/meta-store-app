import { products } from "../db/products";
export function ProductListing() {
  return (
    <>
      <h1>Product Listing Page</h1>

      <ul className="card-container">
        {
         products.map((product) => (
          <li className="product-item card-item">
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <div>
              <button className="card-button">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
}
