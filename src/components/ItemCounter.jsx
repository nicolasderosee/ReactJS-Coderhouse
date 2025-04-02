import { useState } from "react";
import "../styles/ItemCounter.css";

export const ItemCounter = ({ stock, add }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (stock > count) setCount(prev => prev + 1);
    } 
    
    const handleSubtract = () => {
        if(count > 1) setCount((prev) => prev - 1); 
    }

    const handleCart = () => {
       setCount(1);
       add(count);
    }

    return (
        <section className="item-counter">
            <button className="counter-btn" onClick={handleSubtract}>-</button>
            <span className="count-display">{count}</span>
            <button className="counter-btn" onClick={handleAdd}>+</button>
            <br />
            <button className="addButton" onClick={handleCart}>Add to cart</button>
        </section>
    );
};