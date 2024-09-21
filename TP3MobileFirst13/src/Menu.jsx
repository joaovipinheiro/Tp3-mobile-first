import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item"><a href="#home">Home</a></li>
        <li className="menu-item"><a href="#about">Sobre</a></li>
        <li className="menu-item"><a href="#services">Serviços</a></li>
        <li className="menu-item"><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
