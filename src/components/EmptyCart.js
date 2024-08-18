import { useNavigate } from "react-router-dom";

export function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="main-content empty-cart">
      <h1>Empty Cart</h1>
      <button onClick={() => navigate("/")} className="btn btn-primary ">
        Expore Products
      </button>
    </div>
  );
}
