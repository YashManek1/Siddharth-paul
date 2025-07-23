import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoIcon from '../assets/logo.svg'; // Or .png
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
  
  // Get current page name based on pathname
  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find(link => link.href === currentPath);
    return currentLink ? currentLink.name : null;
  };

  const currentPage = getCurrentPageName();

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logoIcon} alt="Siddharth Paul Logo Icon" className="logo-icon" />
          <div className="logo-text">
            <span>SIDDHARTH</span>
            <span>PAUL</span>
          </div>
        </Link>
        <nav className="navbar">
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
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            marginLeft: 16,
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
      </div>
      <div className="bottom-bar-gradient"></div>
    </header>
  );
};

export default Header;