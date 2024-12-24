import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeDropdown}>
          <img src={logo} alt="نور على نور" className="logo-image" />
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleDropdown}>
        ☰
      </div>
      <ul className={`navbar-links ${isDropdownOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" onClick={closeDropdown}>الصفحة الرئيسية</Link>
        </li>
        <li>
          <Link to="/surahlist" onClick={closeDropdown}>القرآن الكريم</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeDropdown}>معلومات عنا</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
