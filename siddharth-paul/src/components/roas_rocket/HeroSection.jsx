
import React from 'react';
import '../Component_Styles/HeroSection.css';


import checkmarkIcon from "../../assets/checkmark-icon.svg";
import expertIcon from "../../assets/expert-icon.svg";
import lifetimeIcon from "../../assets/lifetime-icon.svg";
import refundIcon from "../../assets/refund-icon.svg";
import rocketIcon from "../../assets/rocket-icon.svg";
import backgroundWave from "../../assets/background-wave.svg";
import backgroundWave2 from "../../assets/background-wave-2-new.svg";

const HeroSection = () => {
  const videoId = "dQw4w9WgXcQ";
  const embedUrl = `https://www.youtube.com/embed/{videoId}`;
   const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector('.global-magnet-checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="gm-hero-section">
      <div className="gm-hero-content">
        <h1 className="gm-hero-main-title">
          <span className="gm-text-black">GET</span>{" "}CONSISTENT{" "}
          <span className="gm-text-black">10X ROAS</span>
        </h1>
        <h2 className="gm-sub-title">
          THAT{" "}
          <span className="gm-text-purple">PRINT CASH</span>{" "}ON DEMAND
        </h2>

        <div className="gm-features-list">
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> WINNING TRIGGERS & HOOKS
          </span>
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> RUN & SCALE LIKE A PRO
          </span>
          <span>
            <img src={checkmarkIcon} alt="checkmark" /> PROVEN SCRIPTS & EDITING
          </span>
        </div>

        <div className="gm-video-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <div className="gm-benefits-list">
          <span className="gm-benefit-item-expert">
            <img src={expertIcon} alt="expert icon" /> LEARN BY EXPERT
          </span>
          <span>
            <img src={lifetimeIcon} alt="lifetime access icon" /> LIFETIME
            ACCESS
          </span>
          <span>
            <img src={refundIcon} alt="refund policy icon" /> 7- DAY REFUND
            POLICY
          </span>
        </div>

        <a href="#access" className="gm-access-now-btn" onClick={scrollToCheckout}>
          ACCESS NOW!
        </a>
      </div>

      <img src={backgroundWave} alt="" className="gm-background-wave-left" />
      <img src={backgroundWave2} alt="background-wave-2-debug" className="gm-background-wave-right" />
      <img src={rocketIcon} alt="rocket icon" className="gm-rocket-icon" />
    </main>
  );
};

export default HeroSection;