import Button from "./Button";
import CartWidget from "./CartWidget";
import Brand from "./Brand";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <section className="navbar-container">
      <div className="logo-cointainer">
        <Brand></Brand>
      </div>

      <div className="left-container">
        <div className="button-container">
          <Button text="Home"></Button>
          <Button text="Bags"></Button>
          <Button text="Wallets"></Button>
          <Button text="Accesories"></Button>
        </div>

        <div className="cartwidget-container">
          <CartWidget></CartWidget>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
