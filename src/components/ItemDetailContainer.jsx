import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import "../styles/ItemDetailContainer.css";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartConext";

export const ItemDetailContainer = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { onAdd } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
    .then((snapshot) => {
      setProducts({...snapshot.data(), id: snapshot.id });
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