import {NavLink} from "react-router-dom";

import './navbar.css'
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Navbar(){
  const {state} = useContext(ProductContext)

    const getActiveStyle =({isActive}) => ({
        fontWeight: isActive ? "bolder" : "",
        textDecoration: isActive ? "underline" : "none",
    })

    return (
        <>   
          <nav className="nav-container">       
            <NavLink to="/" style={getActiveStyle}>Products</NavLink>
            <NavLink to="/cart" style={getActiveStyle}>Cart({state.cart.length})</NavLink>
          </nav>
        </>
    )
} 