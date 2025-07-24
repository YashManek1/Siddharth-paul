import React from "react";
import "./Footer.css";

const Footer = () => (
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
    </div>
  </footer>
);

export default Footer;
