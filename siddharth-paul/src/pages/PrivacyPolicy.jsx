import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PolicyPages.css";

const PrivacyPolicy = () => (
  <div className="policy-page">
    <Header />
    <div className="policy-container">
      <div className="policy-header">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-subtitle">Protecting your privacy and personal data</p>
        <div className="policy-divider"></div>
      </div>
      
      <div className="policy-content">
        <h2>Introduction</h2>
        <p>This Privacy Policy describes how we handle and protect your personal data and the choices you have regarding the use of that data. Please take a moment to review this policy and contact us if you have any questions.</p>

        <h2>Data Collection</h2>
        <p>We collect personal data from users to provide a personalized and efficient experience on our platform. The data we collect includes but is not limited to:</p>
        <ul>
          <li>Personal information such as name, email address, and phone number.</li>
          <li>Account information and usage data.</li>
          <li>Data collected through cookies and other tracking technologies.</li>
        </ul>

        <h2>Use of Data</h2>
        <p>The data we collect is used for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To personalize your experience and offer tailored content.</li>
          <li>To manage your account and provide customer support.</li>
          <li>To monitor usage and improve our services.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>We do not share your personal data with third parties except in the following cases:</p>
        <ul>
          <li>When required by law or government agencies.</li>
          <li>To trusted third-party service providers who assist in delivering our services.</li>
          <li>For business transactions such as mergers or acquisitions.</li>
        </ul>

        <h2>Data Security</h2>
        <p>We take data security seriously and implement appropriate measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.</p>

        <h2>Your Rights</h2>
        <p>You have certain rights regarding your personal data, including:</p>
        <ul>
          <li>The right to access, update, or delete your personal data.</li>
          <li>The right to object to or restrict the processing of your data.</li>
          <li>The right to withdraw consent at any time.</li>
        </ul>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:paul@elixzorconsulting.com">paul@elixzorconsulting.com</a></p>
        </div>

        <div className="last-updated">
          <p>Last updated: January 2024</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
