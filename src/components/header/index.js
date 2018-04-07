import React from 'react';
import './style.scss';
import logo from './img.png';

export default () => (
  <header className="Header">
    <div className="container">
      <nav className="Header__nav-container">
        <div className="Header__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="Header__nav">
          <li className="Header__nav-item">About us</li>
          <li className="Header__nav-item">Services</li>
          <li className="Header__nav-item">Guarantee</li>
          <li className="Header__nav-item">Resources</li>
          <li className="Header__nav-item">Forms</li>
          <li className="Header__nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  </header>
);
