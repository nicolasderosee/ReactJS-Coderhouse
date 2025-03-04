import Button from "./Button";
import CartWidget from "./CartWidget";
import Brand from "./Brand";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <section className="navbar-container">
        <div className="menu-container">
          <div className="left-menu">
            <Button text="Shop"></Button>
            <Button text="About"></Button>
            <Button text="Futures"></Button>
          </div>
          <div className="logo-cointainer">
            <Brand></Brand>
          </div>
          <div className="right-menu">
            <Button text="Search"></Button>
            <Button text="Account"></Button>
            <div className="cartwidget-container">
              <CartWidget></CartWidget>
            </div>
          </div>
        </div>
    </section>
  );
}

export default NavBar;
