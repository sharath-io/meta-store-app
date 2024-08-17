import {NavLink} from "react-router-dom";

import './navbar.css'

export function Navbar(){

    const getActiveStyle =({isActive}) => ({
        fontWeight: isActive ? "bolder" : "",
        textDecoration: isActive ? "underline" : "none",
    })

    return (
        <>   
          <nav className="nav-container">       
            <NavLink to="/" style={getActiveStyle}>Products</NavLink>
            <NavLink to="/cart" style={getActiveStyle}>Cart</NavLink>
          </nav>
        </>
    )
}