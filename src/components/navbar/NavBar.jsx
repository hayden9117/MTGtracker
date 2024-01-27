import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MTG tracker</h1>
        <ul className="navbar-menu">
          {/* <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Services</a>
          </li> */}
          <li className="navbar-item">
            <a href="/Login" className="navbar-link">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;