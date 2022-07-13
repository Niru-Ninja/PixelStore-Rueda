import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import "./styles.css";
import ItemDetail from "../../presentation/ItemDetail";

const ItemDetailContainer = () => {
  const [detalleDeProducto, setDetalleDeProducto] = useState({});

  const params = useParams();

  useEffect(() => {
    const getProducto = async () => {
      const docRef = doc(db, "products", params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const producto = {id: docSnap.id, ...docSnap.data()};
        setDetalleDeProducto(producto);
      } else {
        console.log("No such document!");
      }
    };
    getProducto();
  }, [params]);

  return (
    <div id="itemDetailContainer">
      {Object.keys(detalleDeProducto).length > 0 ? (
        <ItemDetail producto={detalleDeProducto} />
      ) : null}
    </div>
  );
};

export default ItemDetailContainer;
