// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          MyPortfolio
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('home')}>
              Home
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('about')}>
              About
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('resume')}>
              Resume
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('skills')}>
              Skills
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('projects')}>
              Projects
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('contact')}>
              Contact
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => scrollToSection('contribution')}>
              Contribution
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;