import React, {useState, useContext, useEffect} from "react";
import { cart } from "../../../context/CartContext";
import './styles.css';

const BuyerForm = ({parentStateFunc=''}) => {
  const [showModal, setShowModal] = useState(true);
  const {generarOrdenDeCompra, orden, clear} = useContext(cart)
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
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const orderChange = () => {
      if(orden.success){
        clear();
      }
    };
    orderChange();
  }, [orden, clear]);

  useEffect(() => {
    const submitClientData = () => {
      if(isFormValid && hasTriedToSubmit){
        console.log('Running order. . .');
        generarOrdenDeCompra({name: nombre, phone: telefono, email: correo});
        setShowModal(false);
        setHasTriedToSubmit(false);
        setIsFormValid(false);
      }
    }
    submitClientData();
  });

  const validateEmail = (mail) => {
    let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailFormat)){
      return (true);
    }
    else{
      return (false);
    }
  }

  const validForm = () => {
    let validNombre, validTelefono, validEmail, validReEmail = false;
    setHasTriedToSubmit(true);
    nombre.length>1 && nombre.length<51 ? validNombre=true : validNombre=false;
    !isNaN(telefono) && telefono.length>7 && telefono.length<14 ? validTelefono=true : validTelefono=false;
    validateEmail(correo) ? validEmail=true : validEmail=false;
    validateEmail(reCorreo) && correo===reCorreo ? validReEmail=true : validReEmail=false;

    if(validNombre && validTelefono && validEmail && validReEmail){
      setValidNombre(true);
      setValidTelefono(true);
      setValidCorreo(true);
      setValidReCorreo(true);
      return true;
    }
    else{
      setValidNombre(validNombre);
      setValidTelefono(validTelefono);
      setValidCorreo(validEmail);
      setValidReCorreo(validReEmail);
      return false;
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    setIsFormValid(validForm());
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
              {valid_nombre ?
                <input id="nombre" name="nombre" className="input-text-valid" type="text" placeholder="Nombre" required onChange={handleNombre}/>
              :
                <input id="nombre" name="nombre" className="input-text-invalid" type="text" placeholder="Nombre" required onChange={handleNombre}/>}
              {valid_telefono ?
                <input id="telefono" name="telefono" className="input-text-valid" type="text" placeholder="Teléfono" required onChange={handleTelefono}/>
              :
              <input id="telefono" name="telefono" className="input-text-invalid" type="text" placeholder="Teléfono" required onChange={handleTelefono}/>}
              {valid_correo ?
                <input id="email" name="email" className="input-text-valid" type="email" placeholder="E-Mail" required onChange={handleCorreo}/>
              :
                <input id="email" name="email" className="input-text-invalid" type="email" placeholder="E-Mail" required onChange={handleCorreo}/>}
              {valid_reCorreo ?
                <input id="re-email" name="re-email" className="input-text-valid" type="email" placeholder="Repita su E-Mail" required onChange={handleReCorreo}/>
              :
              <input id="re-email" name="re-email" className="input-text-invalid" type="email" placeholder="Repita su E-Mail" required onChange={handleReCorreo}/>}
              <button style={{marginTop: '20px'}} className="modal-button" onClick={handleClick}>Confirmar</button>
            </form>
          </div>
        </div>
    :
    null
  );
};

export default BuyerForm;