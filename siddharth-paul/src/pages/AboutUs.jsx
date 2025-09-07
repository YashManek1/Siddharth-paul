import React from "react";
import "./PolicyPages.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">About Us</h1>
          <p className="policy-subtitle">
            Learn more about our company, our mission, and our commitment to
            you.
          </p>
          <div className="policy-divider"></div>
        </div>

        <div className="policy-content">
          <h2>Welcome</h2>
          <p>
            Welcome to our website! We are dedicated to providing the best
            services and products to our customers. Our team is passionate about
            helping you achieve your goals.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that bring value to
            our customers. We strive for excellence and aim to exceed
            expectations in everything we do.
          </p>

          <h2>Our Vision</h2>
          <p>
            Our vision is to be a leader in our industry, known for our
            innovation, customer service, and commitment to quality. We want to
            create a better future through our work.
          </p>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>If you have any questions, feel free to reach out to us:</p>
            <ul>
              <li>
                <strong>Email:</strong> paul@elixzorconsulting.com
              </li>
              <li>
                <strong>Phone:</strong> +91 80975 42858
              </li>
              <li>
                <strong>Address:</strong> Tummy Fillers, Floor no. 2nd, Flat no.
                B-208, PRABHAKAR JANGID ESTATE CHSL, Near Vijay Park, Jangid
                Estate, Mira Road East, Mira Bhayandar, Thane, Maharashtra,
                401107
              </li>
            </ul>
          </div>
        </div>

        <div className="last-updated">Last Updated: September 8, 2025</div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
