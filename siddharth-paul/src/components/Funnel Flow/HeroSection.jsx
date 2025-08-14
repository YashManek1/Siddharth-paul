import React from "react";
import "../Component_Styles/HeroSection.css";

import checkmarkIcon from "../../assets/checkmark-icon.svg";
import checkmarkIconDark from "../../assets/checkmark-icon-darkmode.svg";
import expertIcon from "../../assets/expert-icon.svg";
import expertIconDark from "../../assets/expert-icon-darkmode.svg";
import lifetimeIcon from "../../assets/lifetime-icon.svg";
import lifetimeIconDark from "../../assets/lifetime-icon-darkmode.svg";
import refundIcon from "../../assets/refund-icon.svg";
import refundIconDark from "../../assets/refund-icon-darkmode.svg";
import rocketIcon from "../../assets/rocket-icon.svg";
import backgroundWave from "../../assets/background-wave.svg";
import backgroundWave2 from "../../assets/background-wave-2-new.svg";
import { useTheme } from "../../contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
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
            <img
              src={theme === "dark" ? checkmarkIconDark : checkmarkIcon}
              alt="checkmark"
            />{" "}
            GET CLIENTS WORLDWIDE
          </span>
          <span>
            <img
              src={theme === "dark" ? checkmarkIconDark : checkmarkIcon}
              alt="checkmark"
            />{" "}
            SELL LIKE A PRO
          </span>
          <span>
            <img
              src={theme === "dark" ? checkmarkIconDark : checkmarkIcon}
              alt="checkmark"
            />{" "}
            BUILD SYSTEMS THAT PRINTS MONEY
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
            <img
              src={theme === "dark" ? expertIconDark : expertIcon}
              alt="expert icon"
            />{" "}
            LEARN BY EXPERT
          </span>
          <span>
            <img
              src={theme === "dark" ? lifetimeIconDark : lifetimeIcon}
              alt="lifetime access icon"
            />{" "}
            LIFETIME ACCESS
          </span>
          <span>
            <img
              src={theme === "dark" ? refundIconDark : refundIcon}
              alt="refund policy icon"
            />{" "}
            7- DAY REFUND POLICY
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
