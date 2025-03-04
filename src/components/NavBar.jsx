import { NavLink } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";
import Brand from "./Brand";
import "../styles/NavBar.css";

function NavBar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <section className="navbar-container">
      <div className="menu-container">
        <div className="left-menu">
          <div className="dropdown" onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
            <NavLink to="/Shop" className="dropdown-toggle">Shop</NavLink>
            {shopOpen && (
              <div className="dropdown-menu">
                <NavLink to="/shop/makeup" className="dropdown-item">Makeup</NavLink>
                <NavLink to="/shop/accesory" className="dropdown-item">Accessories</NavLink>
              </div>
            )}
          </div>
          
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Futures">Futures</NavLink>
        </div>
        
        <div className="logo-container">
          <Brand />
        </div>

        <div className="right-menu">
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="/Account">Account</NavLink>
          <div className="cartwidget-container">
            <CartWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;