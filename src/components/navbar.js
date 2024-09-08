import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/electronics">Electrónica</Link>
      <Link to="/category/clothing">Ropa</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
  );
};

export default Navbar;