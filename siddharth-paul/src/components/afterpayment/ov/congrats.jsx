import React from 'react';
import './congrats.css';

import checkmarkIcon from "../../../assets/checkmark-icon.svg";
import expertIcon from "../../../assets/expert-icon.svg";
import lifetimeIcon from "../../../assets/lifetime-icon.svg";
import refundIcon from "../../../assets/refund-icon.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import backgroundWave from "../../../assets/background-wave.svg";
import backgroundWave2 from "../../../assets/background-wave-2-new.svg";
import PersonalCallsSection from './PersonalCallSection';

const Congrats = () => {
  const videoId = "dQw4w9WgXcQ";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <main className="gm-hero-section">
      <div className="gm-hero-content">
        <p className="gm-hero-subtitle">CONGRATS ON YOUR RECENT PURCHASE...</p>
        
        <h1 className="gm-hero-main-title">
          <span className="gm-text-black">UPGRADE YOURSELF TO GUARANTEE</span>
        </h1>
        <h2 className="gm-sub-title">
          <span className="gm-text-black">GUARANTEE Your Perfect Pitch with a</span>
        </h2>
        <h3 className="gm-additional-title">
          <span className="gm-text-black">Live 1-1 Breakdown</span>
        </h3>

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
            <img src={expertIcon} alt="expert icon" /> LIVE PITCH BREAKDOWN
          </span>
          <span>
            <img src={lifetimeIcon} alt="infinity icon" /> FIX WEAK SPOTS INSTANTLY
          </span>
          <span>
            <img src={refundIcon} alt="growth icon" /> WALK AWAY WITH A PROVEN OFFER
          </span>
        </div>

        <a href="#access" className="gm-access-now-btn">
          ACCESS NOW!
        </a>
      </div>

      <img src={backgroundWave} alt="" className="gm-background-wave-left" />
      <img src={backgroundWave2} alt="background-wave-2-debug" className="gm-background-wave-right" />
      <img src={rocketIcon} alt="rocket icon" className="gm-rocket-icon" />
    </main>
  );
};

export default Congrats;