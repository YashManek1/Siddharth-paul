import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Siddharth Paul Logo" className="logo" />
      </div>
      <nav className="navbar">
        <a href="#global-magnet">GLOBAL MAGNET</a>
        <a href="#pitch-mastery">PITCH MASTERY</a>
        <a href="#roas-rocket">ROAS ROCKET</a>
        <a href="#offer-vault">OFFER VAULT</a>
        <a href="#funnel-flow">FUNNEL FLOW</a>
      </nav>
    </header>
  );
};

export default Header;