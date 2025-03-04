import { items } from "../data/data";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect (() =>{
    new Promise ((resolve,reject) => setTimeout(() => resolve(items), 2000))
    .then((response) => { 
      if(!id) {
        setProducts(response);
      } else {
        const filtered = response.filter((item) => item.category === id) 
        setProducts(filtered);
      }
    })
    .finally(()=> setLoading(false));
  }, [id]);

  if(loading) return "loading...";

  return (
    <div className="itemListContainer">
      <ItemList items={products} />
    </div>
  )
};

export default ItemListContainer;
