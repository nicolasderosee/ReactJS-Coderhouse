import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../styles/ItemDetailContainer.css";
import { items } from "../data/data";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartConext";

export const ItemDetailContainer = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { onAdd } = useContext(CartContext);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items), 2000))
      .then((response) => {
        const finded = response.find((item) => item.id === Number(id));
        setProducts(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const add = (count) => {
    onAdd({ ...product, count });
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="detail-section">
      <h1 className="detail-title">Product</h1>
      <div className="detail-content">
        <h2 className="detail-product-title">{product.title}</h2>
        <img className="detail-image" src={product.image} alt="" />
        <div className="detail-description-content">
          <p className="detail-description">{product.description}</p>
          <p className="detail-description">${product.price}</p>
        </div>
        <p className="detail-description">{product.stock} In Stock</p>
      </div>
      <ItemCounter stock={product.stock} add={add} />
    </div>
  );
};

export default ItemDetailContainer;