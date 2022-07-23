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

  useEffect(() => {
    const orderChange = () => {
      if(orden.success){
        clear();
      }
    };
    orderChange();
  }, [orden, clear]);

  const handleClick = () => {
    generarOrdenDeCompra({name: nombre, phone: telefono, email: correo});
    setShowModal(false);
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
              <input id="nombre" name="nombre" className="input-text" type="text" placeholder="Nombre" required onChange={handleNombre}/>
              <input id="telefono" name="telefono" className="input-text" type="text" placeholder="Teléfono" required onChange={handleTelefono}/>
              <input id="email" name="email" className="input-text" type="text" placeholder="E-Mail" required onChange={handleCorreo}/>
              <input id="re-email" name="re-email" className="input-text" type="text" placeholder="Repita su E-Mail" required onChange={handleReCorreo}/>
              <button style={{marginTop: '20px'}} className="modal-button" onClick={() => handleClick()}>Confirmar</button>
            </form>
          </div>
        </div>
    :
    null
  );
};

export default BuyerForm;