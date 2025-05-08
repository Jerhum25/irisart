import React, { useState } from 'react';
import './Header.scss';
import { FaBars, FaBurger, FaX } from 'react-icons/fa6';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if(window.innerWidth < 768){

        setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className="headerContainer" id='header'  >
      <div className="logo">
        {/* <img src="/public/assets/images/" alt="Logo" className="image" /> */}
          <h1>D'iris & d'art</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="list">
          <li className="item" onClick={toggleMenu}><a href="/">Accueil</a></li>
          <li className="item" onClick={toggleMenu}><a href="/#aboutUs">À propos</a></li>
          <li className="item" onClick={toggleMenu}><a href="/#prices">Tarifs</a></li>
          <li className="item" onClick={toggleMenu}><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaX/> : <FaBars/>}
      </button>
    </header>
  );
};

export default Header;
