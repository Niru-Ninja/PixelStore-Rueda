import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

    function dropdownFunction() {
        document.getElementById("dropdownId").classList.toggle("show");
      }
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("dropdownId");
          if (myDropdown && myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }

    return (
        <div className="navbar">
            <Link to='/'><img id="pixelStoreLogo" src='assets/PixelStore-Logo.svg' alt="Pixel Store Logo"/></Link>
            <Link to='/' className='barLink'>Home</Link>
            <div className="dropdown">
                <button className="dropbtn" onClick={dropdownFunction}>Categorias 
                 <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="dropdownId">
                    <Link to='/category/arma'>Armas</Link>
                    <Link to='/category/consumible'>Consumibles</Link>
                    <Link to='/category/miscelaneo'>Misceláneo</Link>
                </div>
            </div> 
            <Link to='/contacto' className='barLink'>Contáctanos</Link>
            <Link to='/nosotros' className='barLink'>Nosotros</Link>
            <CartWidget/>
        </div>

    );
}

export default NavBar;