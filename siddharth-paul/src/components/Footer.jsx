import React, { useState } from "react";
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
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="footer-separator">•</span>
        <a href="/terms-of-use">Terms of Use</a>
        <span className="footer-separator">•</span>
        <a href="/contact-us">Contact Us</a>
        <span className="footer-separator">•</span>
        <a href="/refund-policy">Refund Policy</a>
        <span className="footer-separator">•</span>
        <a href="#" onClick={handleSupportClick}>
          Support
        </a>
      </div>
      <Popup isOpen={showPopup} onClose={handleClose} userIdentifier={null} />
    </footer>
  );
};

export default Footer;
