import React, { useState, useEffect } from 'react';
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

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.app-header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Logo Section */}
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
        
        {/* Desktop Navigation - Simple Horizontal Layout */}
        <nav className="navbar desktop-navbar">
          <div className="horizontal-nav-links">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link 
                  to={link.href}
                  className={`nav-link ${currentPage === link.name ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && <span className="link-separator">|</span>}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Right Controls */}
        <div className="right-controls">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-container">
            <button
              className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
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
      <nav className={`mobile-navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={closeMenu} 
              className={`mobile-nav-link ${currentPage === link.name ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="bottom-bar-gradient"></div>
    </header>
  );
};

export default Header;