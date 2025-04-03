import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/ItemListContainer.css";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  /*useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(items), 2000))
      .then((response) => {
        if (!id) {
          setProducts(response);
        } else {
          const filtered = response.filter((item) => item.category === id);
          setProducts(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
  
    const q = id 
      ? query(collection(db, "items"), where("category", "==", id))
      : query(collection(db, "items"));
  
    getDocs(q).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    })
    .finally(() => setLoading(false));
  }, [id]);
  

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="itemListContainer">
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;