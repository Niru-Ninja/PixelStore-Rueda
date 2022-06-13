import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <ul>
            <li><img src='PixelStore-Logo.svg' alt="Pixel Store Logo"/></li>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#categorias">Categorias</a></li>
            <li><a href="#contacto">Contactanos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
        </ul>
    );
}

export default NavBar;