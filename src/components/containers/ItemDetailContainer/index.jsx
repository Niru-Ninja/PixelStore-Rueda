import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import "./styles.css";
import ItemDetail from "../../presentation/ItemDetail";
import Loader from "../../presentation/Loader";
import ModalIt from "../../presentation/ModalIt";

const ItemDetailContainer = () => {
  const [detalleDeProducto, setDetalleDeProducto] = useState({});
  const [loader, setLoader] = useState(true);
  const [modalError, setModalError] = useState(false)

  const params = useParams();

  useEffect(() => {
    const getProducto = async () => {
      const docRef = doc(db, "products", params.id);
      const docSnap = await getDoc(docRef);
      setLoader(false)
      if (docSnap.exists()) {
        const producto = { id: docSnap.id, ...docSnap.data() };
        setDetalleDeProducto(producto);
      } else {
        setModalError(true)
      }
    };
    getProducto();
  }, [params]);

  return(
    loader ?
      <Loader/>
    :
      <div id="itemDetailContainer">
        {Object.keys(detalleDeProducto).length > 0 ? (
          <ItemDetail producto={detalleDeProducto} />
        ) : null}
        {modalError && <ModalIt
          headerText='Hubo un error'
          buttonText='Volver al inicio'
          redirectTo='/'>
          <p style={{fontWeight: 'bold'}}>El documento al que pertenece el producto no se encontró en la base de datos.</p> 
         </ModalIt>
        }
      </div>
  );
};

export default ItemDetailContainer;
