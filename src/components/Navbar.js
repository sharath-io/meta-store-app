import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import { ProductContext } from "../contexts/ProductContext";

export function Navbar() {
  const { state } = useContext(ProductContext);

  const getActiveStyle = ({ isActive }) => ({
    color: "white",
    fontWeight: isActive ? "bolder" : "",
    textDecoration: isActive ? "underline" : "none",
  });
  const totalCartItems = state.cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <>
      <ul className="nav-bar">
        <li>meta-store</li>
        <li>
          <NavLink to="/" style={getActiveStyle}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" style={getActiveStyle}>
            Cart({totalCartItems})
          </NavLink>
        </li>
      </ul>
    </>
  );
}
