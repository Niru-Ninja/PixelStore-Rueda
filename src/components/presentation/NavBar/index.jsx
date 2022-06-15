import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><img id="pixelStoreLogo" src='assets/PixelStore-Logo.svg' alt="Pixel Store Logo"/></li>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#categorias">Categorias</a></li>
                <li><a href="#contacto">Contactanos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;