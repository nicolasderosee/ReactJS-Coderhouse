import { items } from "../data/data";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/ItemDetailContainer.css";


export const ItemDetailContainer = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect (() =>{
    new Promise ((resolve,reject) => setTimeout(() => resolve(items), 2000))
    .then((response) => { 
        const finded = response.find((item) => item.id === Number(id)) 
        setProducts(finded);
    })
    .finally(()=> setLoading(false));
  }, [id]);

  if(loading) return "loading...";

  return (
    <div className="detail-section">
      <h1 className="detail-title">Product</h1>
      <div className="detail-content">
        <h2 className="detail-product-title">{product.title}</h2>
        <img className="detail-image" src={product.image} alt="" />
        <div className="detail-description-content">
          <p className="detail-description">{product.description}</p>
          <p className="detail-description">{product.price}</p>
        </div>
      </div>
    </div>
  )
};

export default ItemDetailContainer;

