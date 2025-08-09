import React from "react";
import "./congrats.css";

import checkmarkIcon from "../../../assets/checkmark-icon.svg";
import expertIcon from "../../../assets/expert-icon.svg";
import lifetimeIcon from "../../../assets/lifetime-icon.svg";
import refundIcon from "../../../assets/refund-icon.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import backgroundWave from "../../../assets/background-wave.svg";
import backgroundWave2 from "../../../assets/background-wave-2-new.svg";
import PersonalCallsSection from "./PersonalCallSection";

const Congrats = () => {
  // Google Drive preview link for embedding
  const embedUrl =
    "https://drive.google.com/file/d/1Us3tmm5RK8C3OCNu5PauCuIm7i9CbrWO/preview";

  return (
    <main className="gm-hero-section">
      <div className="gm-hero-content">
        <p className="gm-hero-subtitle">CONGRATS ON YOUR RECENT PURCHASE...</p>

        <h1 className="gm-hero-main-title">
          <span className="gm-text-black">
            UPGRADE YOURSELF TO GUARANTEE YOUR
          </span>
        </h1>
        <h2 className="gm-sub-title">
          <span className="gm-text-black">
            FUNNEL ACTUALLY CONVERTS — GET REAL-TIME
          </span>
        </h2>
        <h3 className="gm-additional-title">
          <span className="gm-text-black">
            HELP FIXING EVERY WEAK SPOT LIVE WITH ME.
          </span>
        </h3>

        <div className="gm-video-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Embedded Google Drive Video"
          />
        </div>

        <div className="gm-benefits-list">
          <span className="gm-benefit-item-expert">
            <img src={expertIcon} alt="expert icon" /> 1-1 CALL WITH SIDDHARTH
          </span>
          <span>
            <img src={lifetimeIcon} alt="infinity icon" /> MAKE THE HIGHEST
            CONVERTING FUNNEL EVER
          </span>
          <span>
            <img src={refundIcon} alt="growth icon" /> REALTIME FEEDBACK [LIVE
            WITH ME]
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
