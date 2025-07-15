import React from 'react';
import '../Component_Styles/AccessSection.css';

const AccessSection = () => {
  return (
    <section className="access-main-section">
      <div className="access-main-container">
        <h2 className="access-main-title">WHAT YOU WILL GET ACCESS TO:</h2>
        
        <div className="access-grid-container">
          <div className="access-card access-card-video">
            <h3 className="access-card-title">PROVEN VIDEO MODULES</h3>
            <p className="access-card-description">
              You'll have a personalized dashboard with access to all materials, step-by-step instructions, and progress tracking—keeping your journey organized and seamless.
            </p>
            <div className="access-card-image">
              <img src="" alt="Video modules dashboard" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">4999/-</span>
            </div>
          </div>

          <div className="access-card access-card-pdf">
            <h3 className="access-card-title">PDF PLAYBOOK</h3>
            <p className="access-card-description">
              PDF Guide: Step-by-Step Blueprint to Acquire and Retain High-Paying Clients
            </p>
            <div className="access-card-image">
              <img src="" alt="PDF playbook guide" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">999/-</span>
            </div>
          </div>

          <div className="access-card access-card-checklist">
            <h3 className="access-card-title">CHECKLISTS</h3>
            <p className="access-card-description">
              Ensure every box is checked before launching a campaign or onboarding a client.
            </p>
            <div className="access-card-image">
              <img src="" alt="Checklists" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">499/-</span>
            </div>
          </div>

          <div className="access-card access-card-community">
            <h3 className="access-card-title">EXCLUSIVE COMMUNITY</h3>
            <p className="access-card-description">
              Join an exclusive community of driven entrepreneurs through live mastermind calls. Get real-time insights, powerful connections, and the accountability you need to scale fast
            </p>
            <div className="access-card-image">
              <img src="" alt="Community members" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">2999/-</span>
            </div>
          </div>

          <div className="access-final-price">
            <div className="access-final-content">
              <div className="access-final-pricing">
                <div className="access-final-regular">
                  <span className="access-final-label">PRICE:</span>
                  <span className="access-final-crossed">9499/-</span>
                </div>
                <div className="access-final-offer">
                  <span className="access-final-label-big">FINAL PRICE:</span>
                  <span className="access-final-green">3999/-</span>
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