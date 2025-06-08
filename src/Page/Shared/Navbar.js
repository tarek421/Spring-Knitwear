import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="logo">
        <NavLink to="/">
          {/* <img src={logo} alt="Spring Knitwear Logo" /> */}
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
