import { items } from "../data/data";
import { ItemList } from "./ItemList";
import "../styles/ItemListContainer.css";

export const ItemListContainer = () => (
  <div className="itemListContainer">
    <ItemList items={items} />
  </div>
);

export default ItemListContainer;
