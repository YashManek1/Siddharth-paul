import React from "react";
import "../Component_Styles/HeroSection.css";

import checkmarkIcon from "../../assets/checkmark-icon.svg";
import expertIcon from "../../assets/expert-icon.svg";
import lifetimeIcon from "../../assets/lifetime-icon.svg";
import refundIcon from "../../assets/refund-icon.svg";
import rocketIcon from "../../assets/rocket-icon.svg";
import backgroundWave from "../../assets/background-wave.svg";
import backgroundWave2 from "../../assets/background-wave-2-new.svg";

const HeroSection = () => {
  // YouTube embed link for embedding
  const embedUrl = "https://www.youtube.com/embed/2KWWQsqmvbY";
  const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector(".global-magnet-checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 className="hero-main-title">
          <span className="text-black">BUILD</span> FUNNELS{" "}
          <span className="text-black">THAT FLOW</span>
        </h1>
        <h2 className="sub-title">
          <span className="text-purple">1000-5000+</span> TO YOU ON{" "}
          <span className="text-purple">AUTOPILOT</span> EVERY SINGLE MONTH
        </h2>

        <div className="features-list">
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> PROVEN FRAMEWORKS
          </span>
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> CLIENT CONVERSIONS
          </span>
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> FLAWLESS LAUNCH
          </span>
        </div>

        <div className="video-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Embedded YouTube Video"
            width="100%"
            height="315"
          />
        </div>

        <div className="benefits-list">
          <span className="benefit-item-expert">
            <img src={expertIcon} alt="expert icon" /> LEARN BY EXPERT
          </span>
          <span>
            <img src={lifetimeIcon} alt="lifetime access icon" /> LIFETIME
            ACCESS
          </span>
          <span>
            <img src={refundIcon} alt="refund policy icon" /> 7-DAY REFUND
            POLICY
          </span>
        </div>

        <a href="#access" onClick={scrollToCheckout} className="access-now-btn">
          ACCESS NOW!
        </a>
      </div>

      <img src={backgroundWave} alt="" className="background-wave-left" />
      <img
        src={backgroundWave2}
        alt="background-wave-2-debug"
        className="background-wave-right"
      />
      <img src={rocketIcon} alt="rocket icon" className="rocket-icon" />
    </main>
  );
};

export default HeroSection;
