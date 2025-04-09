import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logoteo from '../../image/logo-teo-3.svg';
import './NavbarEstilos.css';
import { FaBars } from 'react-icons/fa';

const CustomNavbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🔥 Estado para controlar el colapso del menú

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrollNav ? 'navbar-scrolled' : 'navbar-default'} fixed-top`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logoteo} height="70" alt="logo" className="imagen-logo" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FaBars className="text-white" />
        </button>
        <div className={`collapse navbar-collapse navbar-mobile-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="sobre-mi" smooth duration={500} offset={-80} onClick={handleLinkClick}>Sobre Mi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="servicios" smooth duration={500} offset={-80} onClick={handleLinkClick}>Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="habilidades" smooth duration={500} offset={-80} onClick={handleLinkClick}>Habilidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portafolio" smooth duration={500} offset={-80} onClick={handleLinkClick}>Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="testimonios" smooth duration={500} offset={-80} onClick={handleLinkClick}>Testimonios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacto" smooth duration={500} offset={0} onClick={handleLinkClick}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
