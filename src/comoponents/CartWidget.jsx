import cart from "../assets/cart.png";
import "../styles/CartWidget.css";

function CartWidget() {
  return (
    <section className="cartwidget-container">
      <img className="shopping-cart" src={cart} alt="shopping cart" />
      <p>(10)</p>
    </section>
  );
}

export default CartWidget;
