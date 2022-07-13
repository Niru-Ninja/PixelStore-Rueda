import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import ItemList from "../../presentation/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const params = useParams();
  const category = params.id;

  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          if (category) {
            if (doc.data().category === category) {
              data.push({ id: doc.id, ...doc.data() });
            }
          } else {
            data.push({ id: doc.id, ...doc.data() });
          }
        });
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [category]);

  return (
    <div id="itemListContainer">
      <h2 style={{ textAlign: "center", width: "100%", marginBottom: "20px" }}>
        {greeting}
      </h2>
      {productos.length > 0 ? <ItemList products={productos} /> : null}
    </div>
  );
};

export default ItemListContainer;
