import React from 'react';
import '../Component_Styles/AccessSection.css';
import img from "../../assets/accessimg1.svg";
import img2 from "../../assets/accessimg2.svg";
import img3 from "../../assets/accessimg3.svg"; 


const AccessSection = () => {
  return (
    <section className="access-main-section">
      <div className="access-main-container">
        <h2 className="access-main-title">WHAT YOU WILL GET ACCESS TO:</h2>
        
        <div className="access-grid-container">
          <div className="access-card access-card-video">
            <h3 className="access-card-title">PROVEN FUNNEL VIDEO MODULES</h3>
            <p className="access-card-description">
              Step-by-step training videos covering every funnel stage — from funnel theory to funnel hacking, TOFU/MOFU/BOFU building, launch, tracking, and optimization.
            </p>
            <div className="access-card-image">
              <img src={img} alt="Video modules dashboard" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">2999/-</span>
            </div>
          </div>

          <div className="access-card access-card-pdf">
            <h3 className="access-card-title">BLUEPRINT GUIDE</h3>
            <p className="access-card-description">
              Downloadable PDF showing you funnel fundamentals, psychology, types, and practical frameworks for every funnel piece
            </p>
            <div className="access-card-image">
              <img src={img2} alt="PDF blueprint guide" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">999/-</span>
            </div>
          </div>

          <div className="access-card access-card-checklist">
            <h3 className="access-card-title">CHECKLISTS</h3>
            <p className="access-card-description">
              Done-for-you funnel audit, A/B test, and launch checklists so you don't miss any steps when building or optimizing your funnels.
            </p>
            <div className="access-card-image">
              <img src="" alt="Checklists" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">497/-</span>
            </div>
          </div>

          <div className="access-card access-card-community">
            <h3 className="access-card-title">EXCLUSIVE COMMUNITY</h3>
            <p className="access-card-description">
              Get inside a private mastermind of funnel builders. Share funnel hacks, see what's working for others, get feedback, and level up your offers — stay ahead of trends with real-time ideas.
            </p>
            <div className="access-card-image">
              <img src={img3} alt="Community members" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">1999/-</span>
            </div>
          </div>

          <div className="access-final-price">
            <div className="access-final-content">
              <div className="access-final-pricing">
                <div className="access-final-regular">
                  <span className="access-final-label">PRICE:</span>
                  <span className="access-final-crossed">6499/-</span>
                </div>
                <div className="access-final-offer">
                  <span className="access-final-label-big">FINAL PRICE:</span>
                  <span className="access-final-green">1999/-</span>
                </div>
              </div>
              <button className="access-final-button">ACCESS NOW!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;