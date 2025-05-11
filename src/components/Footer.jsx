import React from 'react';
import { Link } from 'react-router-dom';  
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="logo">
        <span className="logo-text2">
          <span className="mourad2">Mourad</span> <span className="portfolio2">Portfolio</span>
        </span>
      </div>
      <div className="footer-center">
        <ul className="footer-menu">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/Design">Design</Link></li> 
          <li><Link to="/UX">UX & UI</Link></li> 
          <li><Link to="/Accessibility">Accessibility</Link></li> 
        </ul>
      </div>
      <div className="footer-right">
        <p>Design and content by Mourad @2025</p>
      </div>
    </div>
  </footer>
);

export default Footer;