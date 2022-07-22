import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './styles.css';

const ModalIt = ({children, headerText, buttonText='', redirectTo=''}) => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleClick = async(route) => {
    setShowModal(false);
    if(route !== ''){
        navigate(route);
    }
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
