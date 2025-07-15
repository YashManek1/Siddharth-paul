import React from 'react';
import '../Component_Styles/AccessSection.css';

const AccessSection = () => {
  return (
    <section className="access-main-section">
      <div className="access-main-container">
        <h2 className="access-main-title">WHAT YOU WILL GET ACCESS TO:</h2>
        
        <div className="access-grid-container">
          <div className="access-card access-card-video">
            <h3 className="access-card-title">VIDEO TRAINING MODULES</h3>
            <p className="access-card-description">
              Watch step-by-step videos where I show you how to build, run, and scale ads that get 10X returns. Learn scripts, hooks, editing, and targeting in a simple, clear way.
            </p>
            <div className="access-card-image">
              <img src="" alt="Video modules dashboard" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">3499/-</span>
            </div>
          </div>

          <div className="access-card access-card-pdf">
            <h3 className="access-card-title">PDF PLAYBOOK</h3>
            <p className="access-card-description">
              Easy-to-follow guide that shows you how to launch, test, and fix your ad campaigns.
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
              Use these simple checklists before starting your ads. Make sure your script, creative, and targeting are ready to go. No more missing steps.
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
              Join other ad makers like you. Ask questions, share what's working, and get help to keep your ads winning.
            </p>
            <div className="access-card-image">
              <img src="" alt="Community members" />
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
                  <span className="access-final-crossed">6999/-</span>
                </div>
                <div className="access-final-offer">
                  <span className="access-final-label-big">FINAL PRICE:</span>
                  <span className="access-final-green">2499/-</span>
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