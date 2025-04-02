import { useContext } from "react";
import { CartContext } from "../contexts/CartConext";
import cart from "../assets/cart.png";
import "../styles/CartWidget.css";

function CartWidget() {
  const { items } = useContext(CartContext);

  // Calculamos la cantidad total de productos
  const totalItems = items.reduce((acc, item) => acc + item.count, 0);

  return (
    <section className="cartwidget-container">
      <img className="shopping-cart" src={cart} alt="shopping cart" />
      <p>({totalItems})</p>
    </section>
  );
}

export default CartWidget;