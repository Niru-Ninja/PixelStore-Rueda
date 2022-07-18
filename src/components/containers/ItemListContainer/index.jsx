import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import ItemList from "../../presentation/ItemList";
import "./styles.css";
import Loader from "../../presentation/Loader";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
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
        setLoader(false);
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [category]);

  return (
    loader?
      <Loader/>
    :
      <div id="itemListContainer">
        <h2 style={{ textAlign: "center", width: "100%", marginBottom: "20px" }}>
          {greeting}
        </h2>
        {productos.length > 0 ? <ItemList products={productos} /> : null}
      </div>
  );
};

export default ItemListContainer;
