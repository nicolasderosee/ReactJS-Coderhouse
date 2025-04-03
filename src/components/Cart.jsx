import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartConext";

import { getFirestore, collection, addDoc } from "firebase/firestore";

import "../styles/Cart.css";

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

export const Cart = () => {
    const { items, onRemove } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const total = !items.lenght ? items.reduce((acc, act) => acc + act.count * act.price, 0) : 0;

    const handleOrder = (e) => {
        e.preventDefault(); 

        if (!buyer.name || !buyer.phone || !buyer.email) {
            alert("Please fill all the fields before purchasing.");
            return;
        }

        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then((snapshot) => {
            if (snapshot.id) {
                alert("Your order: " + snapshot.id + " has been completed!");
            }
        }).finally(() => {
            setBuyer(initialValues);
            onRemove();
        });
    };

    return (
        <>
            <div className="cart-section">
                <div className="top-container">
                    <h1 className="cart-title">Cart</h1>
                    <button className="cartButton" onClick={onRemove}>Clear</button>
                </div>
                {items.map((item) => (
                    <div className="bottom-container" key={item.id}>
                        <h2 className="cart-product-title">{item.title}</h2>
                        <img src={item.image} alt={item.title} />
                        <p className="cart-description">Selected Items: {item.count}</p>
                        <p className="cart-description">Price: ${item.price} (x1)</p>
                    </div>
                ))}
                <div className="final-price-container">
                    <h4 className="cart-subtotal">Subtotal: ${total} </h4>
                </div>
                <form className="form-container" onSubmit={handleOrder}>
                    <h2 className="cart-title">Your Information</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={buyer.name}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={buyer.phone}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={buyer.email}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <div className="buy-container">
                        <button type="submit" className="cartButton spacing">
                            Buy
                        </button>
                    </div>
                </form>
                <span class="contact-image"></span>
            </div>
        </>
    );
};
