import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PolicyPages.css";

const ContactUs = () => (
  <div className="policy-page">
    <Header />
    <div className="policy-container">
      <div className="policy-header">
        <h1 className="policy-title">Contact Us</h1>
        <p className="policy-subtitle">Get in touch with our team</p>
        <div className="policy-divider"></div>
      </div>
      
      <div className="policy-content">
        <h2>Contact Information</h2>
        <p>If you have any questions about our services or need support, please don't hesitate to reach out to us using the information below:</p>
        
        <div className="contact-info">
          <h3>Email</h3>
          <p>
            <a href="mailto:paul@elixzorconsulting.com">paul@elixzorconsulting.com</a>
          </p>
        </div>

        <div className="contact-info">
          <h3>Address</h3>
          <p>
            Tummy Fillers, Floor no. 2nd, Flat no. B-208,<br />
            PRABHAKAR JANGID ESTATE CHSL,<br />
            Near Vijay Park, Jangid Estate,<br />
            Mira Road East, Mira Bhayandar,<br />
            Thane, Maharashtra, 401107
          </p>
        </div>

        <h2>Business Hours</h2>
        <p>We typically respond to emails within 24-48 hours during business days. For urgent matters, please mention "URGENT" in your email subject line.</p>

        <h2>What We Can Help With</h2>
        <ul>
          <li>General inquiries about our services</li>
          <li>Technical support and troubleshooting</li>
          <li>Billing and payment questions</li>
          <li>Partnership opportunities</li>
          <li>Feedback and suggestions</li>
        </ul>

        <div className="last-updated">
          <p>Last updated: January 2024</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactUs;
