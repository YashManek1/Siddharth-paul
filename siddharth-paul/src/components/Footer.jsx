import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Footer.css";
import Popup from "./Popup"; // Import the actual popup

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSupportClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <footer className="site-footer">
      <div className="footer-divider" />
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span className="footer-separator">•</span>
        <Link to="/terms-of-use">Terms of Use</Link>
        <span className="footer-separator">•</span>
        <Link to="/contact-us">Contact Us</Link>
        <span className="footer-separator">•</span>
        <Link to="/refund-policy">Refund Policy</Link>
        <span className="footer-separator">•</span>
        <Link to="/about-us">About Us</Link>
        <span className="footer-separator">•</span>
        <a href="#" onClick={handleSupportClick}>
          Subscribe
        </a>
      </div>
      <Popup isOpen={showPopup} onClose={handleClose} userIdentifier={null} />
    </footer>
  );
};

export default Footer;
