import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../image/logo.svg';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setVisible(false);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setSticky(true);
          setVisible(true);
        }, 50);
      } else {
        setSticky(false);
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''} ${visible ? 'show' : 'hide'}`} role="navigation">
      <div className="logo">
        <NavLink to="/" className="d-flex align-items-center">
          <img src={logo} alt="Spring Knitwear Logo" />
          <span>Spring Knitwear</span>
        </NavLink>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/contacts" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
