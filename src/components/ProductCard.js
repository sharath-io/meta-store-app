export function ProductCard({product}){
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
              <button className="card-button">Add to Cart</button>
            </div>
          </li>
        </>
    )
}