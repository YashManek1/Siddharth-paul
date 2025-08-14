import React from "react";
import "./congrats.css";

import checkmarkIcon from "../../../assets/checkmark-icon.svg";
import expertIcon from "../../../assets/expert-icon.svg";
import expertIconDark from "../../../assets/expert-icon-darkmode.svg";
import lifetimeIcon from "../../../assets/lifetime-icon.svg";
import lifetimeIconDark from "../../../assets/lifetime-icon-darkmode.svg";
import refundIcon from "../../../assets/refund-icon.svg";
import refundIconDark from "../../../assets/refund-icon-darkmode.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import backgroundWave from "../../../assets/background-wave.svg";
import backgroundWave2 from "../../../assets/background-wave-2-new.svg";
import { useTheme } from "../../../contexts/ThemeContext";

const Congrats = () => {
  const { theme } = useTheme();
  // YouTube embed link for embedding
  const embedUrl = "https://www.youtube.com/embed/g1I62C2rTNw";

  return (
    <main className="gm-hero-section">
      <div className="gm-hero-content">
        <p className="gm-hero-subtitle">CONGRATS ON YOUR RECENT PURCHASE...</p>

        <h1 className="gm-hero-main-title">
          <span className="gm-text-black">UPGRADE YOURSELF TO GUARANTEE</span>
        </h1>
        <h2 className="gm-sub-title">
          <span className="gm-text-black">YOUR FIRST CLOSE YOUR FIRST</span>
        </h2>
        <h3 className="gm-additional-title">
          <span className="gm-text-black">
            $1,000+ SALE WITH ME [1-1 CALLS]
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
            1-1 CALLS WITH SIDDHARTH
          </span>
          <span>
            <img
              src={theme === "dark" ? lifetimeIconDark : lifetimeIcon}
              alt="infinity icon"
            />{" "}
            CLOSE YOUR FIRST CLIENT WITH ME
          </span>
          <span>
            <img
              src={theme === "dark" ? refundIconDark : refundIcon}
              alt="growth icon"
            />{" "}
            GROW 1000% FASTER THAN OTHERS
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
