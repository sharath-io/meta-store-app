import { useNavigate } from "react-router-dom"

export function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="main-content empty-cart">
          <h1>404 - Page Not Found </h1>
          <button onClick={()=> navigate('/')} className="btn btn-primary ">Expore Products</button>
        </div>
    )
  } 