import { useContext } from "react";
import { CartContext } from "../contexts/CartConext";
import "../styles/Cart.css";

export const Cart = () => {
    const { items, onRemove } = useContext(CartContext);

    return (
        <>
            <div class="cart-section">
                <div class="top-container">
                    <h1 class="cart-title">Cart</h1>
                    <button class="clearButton" onClick={onRemove}>Clear</button>
                </div>
                {items.map((item) => (
                    <section class="bottom-container" key={item.id}>
                        <h2 class="cart-product-title">{item.title}</h2>
                        <img src={item.image} alt={item.title} />
                        <p class="cart-description">Cantidad: {item.count}</p>
                        <p class="cart-description">Price: ${item.price}</p>
                    </section>
                ))}
            </div>
        </>
    );
};
