import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cart } from "../../../context/CartContext";
import './styles.css';

/**
 * Muestra un modal en formato de cartel con un titulo y una cruz para cerrarlo. Se puede utilizar children para colocar lo que se quiera dentro del modal.
 * @property {string} headerText Título del modal.
 * @property {function} parentStateFunc (Opcional) Función de setState que determina si el ModalIt debe mostrarse o no.
 * @property {function} auxFunc (Opcional) Función que se ejecuta al presionar el botón.
 * @property {string} buttonText (Opcional) Texto que aparece en el botón. Si no se especifica no se mostrará ningún botón.
 * @property {string} redirectTo (Opcional) Ruta a la que redirecciona cuando se presiona el botón. Si no se especifica no redirecciona a ninguna ruta.
 * @returns 
 */

const ModalIt = ({children, headerText, parentStateFunc=null, auxFunc=null, buttonText='', redirectTo=''}) => {
  const [showModal, setShowModal] = useState(true);
  const {setOrden} = useContext(cart)
  const navigate = useNavigate();

  const handleClick = async(route) => {
    setShowModal(false);
    if(parentStateFunc){
      parentStateFunc(false);
    }
    if(auxFunc){
      auxFunc();
    }
    if(route !== ''){
        navigate(route);
    }
    setOrden({});
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    showModal ?
        <div className="modal-content">
          <div className="modal-header">
              <h2>{headerText}</h2>
              <span className="close" onClick={() => handleClose()}>&times;</span>
          </div>
          <div className="modal-body">
              {children}
          </div>
          {buttonText!=='' &&
          <button
            className="modal-button" 
            onClick={() => handleClick(redirectTo)}>
              {buttonText}
          </button>}
        </div>
    :
    null
  );
};

export default ModalIt;
