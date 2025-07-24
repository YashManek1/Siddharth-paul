import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PolicyPages.css";

const RefundPolicy = () => (
  <div className="policy-layout">
    <Header />
    <div className="policy-container">
      <div className="policy-content">
        <h1 className="policy-title">Refund Policy</h1>
        
        <section className="policy-section">
          <h2>Overview</h2>
          <p>Our refund policy ensures that you are eligible for a refund if you meet certain conditions. We are committed to providing high-quality services and customer satisfaction.</p>
        </section>

        <section className="policy-section">
          <h2>Refund Eligibility</h2>
          <p>Refunds will be processed in the following situations:</p>
          <ul>
            <li>Failure to deliver the agreed-upon services within the specified timeframe</li>
            <li>Technical issues on our end that prevent you from accessing or using our services</li>
            <li>Services that do not meet the specifications outlined in your agreement</li>
            <li>Cancellation requests made within the first 48 hours of purchase (subject to review)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Non-Refundable Situations</h2>
          <p>Please note that we do not provide refunds for:</p>
          <ul>
            <li>Cancellations made by users after services have been delivered</li>
            <li>Change of mind or personal circumstances</li>
            <li>Services that have been completed according to specifications</li>
            <li>Digital products that have been accessed or downloaded</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Refund Process</h2>
          <p>To request a refund:</p>
          <ol>
            <li>Contact us at the email address provided below with your purchase details</li>
            <li>Include your order number, purchase date, and reason for the refund request</li>
            <li>Our team will review your request within 3-5 business days</li>
            <li>If approved, refunds will be processed within 7-10 business days to your original payment method</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>If you believe you qualify for a refund or have questions about our refund policy, please contact us at:</p>
          <p className="contact-info">Email: <a href="mailto:paul@elixzorconsulting.com">paul@elixzorconsulting.com</a></p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
