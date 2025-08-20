import React from "react";
import "../ff/congrats.css";

// checkmarkIcon removed (unused) — consolidated CSS used instead
import expertIcon from "../../../assets/expert-icon.svg";
import expertIconDark from "../../../assets/expert-icon-darkmode.svg";
import lifetimeIcon from "../../../assets/lifetime-icon.svg";
import lifetimeIconDark from "../../../assets/lifetime-icon-darkmode.svg";
import refundIcon from "../../../assets/refund-icon.svg";
import refundIconDark from "../../../assets/refund-icon-darkmode.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import backgroundWave from "../../../assets/background-wave.svg";
import backgroundWave2 from "../../../assets/bg-wave.svg";
import { useTheme } from "../../../contexts/ThemeContext";

const Congrats = () => {
  const { theme } = useTheme();
  // YouTube embed link for embedding
  const embedUrl = "https://www.youtube.com/embed/wQzh6ZUkbQs";

  return (
    <main className="gm-hero-section">
      <div className="gm-hero-content">
        <p className="gm-hero-subtitle">CONGRATS ON YOUR RECENT PURCHASE...</p>

        <h1 className="gm-hero-main-title">
          <span className="gm-text-black">
            UPGRADE NOW TO GUARANTEE YOUR FIRST
          </span>
        </h1>
        <h2 className="gm-sub-title">
          <span className="gm-text-black">10X ROAS AD IN 30 DAYS</span>
        </h2>
        <h3 className="gm-additional-title">
          <span className="gm-text-black">
            WITH PERSONAL 1-1 CALL + DONE-FOR-YOU AD SCRIPTS
          </span>
        </h3>

        <div className="gm-video-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Embedded YouTube Video"
          />
        </div>

        <div className="gm-benefits-list">
          <span className="gm-benefit-item-expert">
            <img
              src={theme === "dark" ? expertIconDark : expertIcon}
              alt="expert icon"
            />{" "}
            1-1 CALL WITH SIDDHARTH
          </span>
          <span>
            <img
              src={theme === "dark" ? lifetimeIconDark : lifetimeIcon}
              alt="infinity icon"
            />{" "}
            DONE-FOR-YOU WINNING AD SCRIPTS
          </span>
          <span>
            <img
              src={theme === "dark" ? refundIconDark : refundIcon}
              alt="growth icon"
            />{" "}
            PERSONAL AD REVIEWS
          </span>
        </div>

        <a href="#access" className="gm-access-now-btn">
          ACCESS NOW!
        </a>
      </div>

      <img src={backgroundWave} alt="" className="gm-background-wave-left" />
      <img
        src={backgroundWave2}
        alt="background-wave-2-debug"
        className="gm-background-wave-right"
      />
      <img src={rocketIcon} alt="rocket icon" className="gm-rocket-icon" />
    </main>
  );
};

export default Congrats;
