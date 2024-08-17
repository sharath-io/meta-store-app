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
    const totalCartItems = state.cart.reduce((acc,curr) => acc+curr.qty,0)

    return (
        <>   
          <nav className="nav-container">       
            <NavLink to="/" style={getActiveStyle}>Products</NavLink>
            <NavLink to="/cart" style={getActiveStyle}>Cart({totalCartItems})</NavLink>
          </nav>
        </>
    )
} 