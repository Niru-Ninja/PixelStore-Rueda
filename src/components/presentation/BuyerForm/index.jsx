import React, {useState, useContext, useEffect} from "react";
import { cart } from "../../../context/CartContext";
import './styles.css';

/**
 * Modal con formulario para que el cliente complete sus datos antes de realizar la compra.
 * @property {function} parentStateFunc Función de setState que determina si el BuyerForm debe mostrarse o no.
 * @returns 
 */

const BuyerForm = ({parentStateFunc=''}) => {
  const [showModal, setShowModal] = useState(true);
  const {generarOrdenDeCompra} = useContext(cart)
  /* States de inputs */
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [reCorreo, setReCorreo] = useState('');
  /* States para validar inputs */
  const [valid_nombre, setValidNombre] = useState(true);
  const [valid_telefono, setValidTelefono] = useState(true);
  const [valid_correo, setValidCorreo] = useState(true);
  const [valid_reCorreo, setValidReCorreo] = useState(true);
  const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);

  /* Effect para validar el form y generar la orden de compra */
  useEffect(() => {
    const submitClientData = () => {
      if(valid_nombre && valid_telefono && valid_correo && valid_reCorreo && hasTriedToSubmit){
        generarOrdenDeCompra({name: nombre, phone: telefono, email: correo});
        setShowModal(false);
        setHasTriedToSubmit(false);
        parentStateFunc(false);
      }
    }
    submitClientData();
  });

  const validateEmail = (mail) => {
    let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return mailFormat.test(mail);
  }

  /* Click en Confirmar, validamos formulario */
  const handleClick = (event) => {
    event.preventDefault();
    setHasTriedToSubmit(true);
    nombre.length>1 && nombre.length<51 ? setValidNombre(true) : setValidNombre(false);
    !isNaN(telefono) && telefono.length>7 && telefono.length<14 ? setValidTelefono(true) : setValidTelefono(false);
    setValidCorreo(validateEmail(correo));
    validateEmail(reCorreo) && correo===reCorreo ? setValidReCorreo(true) : setValidReCorreo(false);
  }

  const handleClose = () => {
    if(parentStateFunc !== ''){
      parentStateFunc(false);
    }
    setShowModal(false);
  }

  const handleNombre = event => {
    setNombre(event.target.value);
  }

  const handleTelefono = event => {
    setTelefono(event.target.value);
  }

  const handleCorreo = event => {
    setCorreo(event.target.value);
  }

  const handleReCorreo = event => {
    setReCorreo(event.target.value);
  }

  return (
    showModal ?
        <div className="modal-content">
          <div className="modal-header">
              <h2>Complete sus datos para realizar la compra</h2>
              <span className="close" onClick={() => handleClose()}>&times;</span>
          </div>
          <div className="modal-body">
            <form>
              <input id="nombre" name="nombre" className={valid_nombre ? "input-text-valid" : "input-text-invalid"} type="text" placeholder="Nombre" required onChange={handleNombre}/>
              <input id="telefono" name="telefono" className={valid_telefono ? "input-text-valid" : "input-text-invalid"} type="text" placeholder="Teléfono" required onChange={handleTelefono}/>
              <input id="email" name="email" className={valid_correo ? "input-text-valid" : "input-text-invalid"} type="email" placeholder="E-Mail" required onChange={handleCorreo}/>
              <input id="re-email" name="re-email" className={valid_reCorreo ? "input-text-valid" : "input-text-invalid"} type="email" placeholder="Repita su E-Mail" required onChange={handleReCorreo}/>
              <button style={{marginTop: '20px'}} className="modal-button" onClick={handleClick}>Confirmar</button>
            </form>
          </div>
        </div>
    :
    null
  );
};

export default BuyerForm;