import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoIcon from '../assets/logo.svg'; // Default logo
import logoIconWhite from '../assets/logo-w.svg'; // White logo for dark mode
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'GLOBAL MAGNET', href: '/global-magnet' },
  { name: 'PITCH MASTERY', href: '/pitch-mastery' },
  { name: 'ROAS ROCKET', href: '/roas-rocket' },
  { name: 'OFFER VAULT', href: '/offer-vault' },
  { name: 'FUNNEL FLOW', href: '/funnel-flow' },
];

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get current page name based on pathname
  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find(link => link.href === currentPath);
    return currentLink ? currentLink.name : null;
  };

  const currentPage = getCurrentPageName();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img 
            src={theme === 'dark' ? logoIconWhite : logoIcon} 
            alt="Siddharth Paul Logo Icon" 
            className="logo-icon" 
          />
          <div className="logo-text">
            <span>SIDDHARTH</span>
            <span>PAUL</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="navbar desktop-navbar">
          {currentPage ? (
            <span className="main-title">{currentPage}</span>
          ) : (
            navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                {link.name}
              </Link>
            ))
          )}
        </nav>

        {/* Right side controls - Theme toggle and Mobile menu */}
        <div className="right-controls">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              border: '1px solid #ccc',
              background: theme === 'dark' ? '#222' : '#fff',
              color: theme === 'dark' ? '#fff' : '#222',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 13,
              transition: 'all 0.2s',
            }}
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-container">
            <button
              className={`hamburger-btn {isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-navbar {isMenuOpen ? 'open' : ''}`}>
        {currentPage ? (
          <div className="mobile-current-page">
            <span className="mobile-main-title">{currentPage}</span>
          </div>
        ) : (
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={closeMenu} className="mobile-nav-link">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div className="bottom-bar-gradient"></div>
    </header>
  );
};

export default Header;