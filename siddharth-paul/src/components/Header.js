import React from 'react';
import './Header.css';
import logoIcon from '../assets/logo.svg'; // Or .png

const navLinks = [
  { name: 'GLOBAL MAGNET', href: '#global-magnet' },
  { name: 'PITCH MASTERY', href: '#pitch-mastery' },
  { name: 'ROAS ROCKET', href: '#roas-rocket' },
  { name: 'OFFER VAULT', href: '#offer-vault' },
  { name: 'FUNNEL FLOW', href: '#funnel-flow' },
];

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logoIcon} alt="Siddharth Paul Logo Icon" className="logo-icon" />
          <div className="logo-text">
            <span>SIDDHARTH</span>
            <span>PAUL</span>
          </div>
        </div>
        <nav className="navbar">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="bottom-bar-gradient"></div>
    </header>
  );
};

export default Header;