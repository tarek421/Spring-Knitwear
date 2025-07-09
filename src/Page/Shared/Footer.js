import React from 'react';
import logo from '../../image/logo.svg';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='Footer' className='footer'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className="logo">
              <NavLink to="/" className="d-flex align-items-center">
                <img src={logo} alt="Spring Knitwear Logo" />
                <span>Spring Knitwear</span>
              </NavLink>
            </div>
            <p className='footer-description'>
              Spring Knitwear is a lifestyle that brings together a journey enriched by history,
              cultural experiences, travel, and influences from various interactions with diverse
              groups of individuals and stakeholders.
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div className='col-md-4 mb-4 px-md-5'>
            <h5 className="footer-heading">Spring Knitwear</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to='about'>About Us</Link></li>
              <li><Link to='services'>Our Services</Link></li>
              <li><Link to='products'>Our products</Link></li>
              <li><Link to='contacts'>Contact Us</Link></li> 
            </ul>
          </div>

          <div className='col-md-4 mb-4'>
            <h5 className="footer-heading">Contact</h5>
            <p><MdLocationOn /> <strong>Head Office:</strong> H#36, R#09, S#09, Uttara, Dhaka</p>
            <p><MdLocationOn /> <strong>Factory:</strong> 11/C/6 Moynartek, Uttarkhan, Dhaka-1230</p>
            <p><MdEmail /> support@spring-knitwearbd.com</p>
            <p><MdPhone /> +880 1755-697330</p>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; {currentYear} Spring Knitwear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
