import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([]);

    const onAdd = (item) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(prod =>
                prod.id === item.id ? { ...prod, count: prod.count + item.count } : prod
            );

            if (prevItems.some(prod => prod.id === item.id)) {
                return updatedItems;
            }

            return [...updatedItems, item];
        });
    };

    const onRemove = () => setItems([]);

    console.log(items);

    return <CartContext.Provider value={{ items, onAdd, onRemove }}>{children}</CartContext.Provider>;
};
