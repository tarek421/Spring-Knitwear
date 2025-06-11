import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';
import logo2 from '../../image/logo2.png';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 200){
        setVisible(false);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setSticky(true);
          setVisible(true);
        }, 50);
      } else if (scrollY <= 200) {
        setSticky(false);
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sticky]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''} ${visible ? 'show' : 'hide'}`}>
      <div className="logo">
        <NavLink to="/" className="d-flex">
          <img src={sticky ? logo : logo2} alt="Spring Knitwear Logo" />
          <span>Spring Knitwear</span>
        </NavLink>
      </div>

      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to='/home' onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to='/about' onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to='/products' onClick={() => setMenuOpen(false)}>Products</NavLink></li>
        <li><NavLink to='/contact' onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
