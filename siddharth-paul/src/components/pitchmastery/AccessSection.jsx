import React from 'react';
import './AccessSection.css';

const AccessSection = () => {
  return (
    <section className="access-main-section">
      <div className="access-main-container">
        <h2 className="access-main-title">WHAT YOU WILL GET ACCESS TO:</h2>
        
        <div className="access-grid-container">
          <div className="access-card access-card-video">
            <h3 className="access-card-title">PROVEN VIDEO MODULES</h3>
            <p className="access-card-description">
              You get my full library of clear, step-by-step training. 
              See exactly how to open, handle, and close real sales 
              calls — plus live chat breakdowns.<br />
              Watch how I do it, then copy.<br />
              Easy dashboard and lifetime access.
            </p>
            <div className="access-card-image">
              <img src="" alt="Video modules dashboard" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">2999/-</span>
            </div>
          </div>

          <div className="access-card access-card-pdf">
            <h3 className="access-card-title">PDF PLAYBOOK</h3>
            <p className="access-card-description">
              Get my plug-and-play sales frameworks. Scripts for cold calls, warm follow-ups, and DMs.
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
              Quick cheat sheets you can print and use before every call.
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
              Join real closers inside our private group. Share wins, get feedback, and practice your pitch live. Stay accountable, stay sharp, and get extra tips you'll never get alone.
            </p>
            <div className="access-card-image">
              <img src="" alt="Community members" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">1499/-</span>
            </div>
          </div>

          <div className="access-final-price">
            <div className="access-final-content">
              <div className="access-final-pricing">
                <div className="access-final-regular">
                  <span className="access-final-label">PRICE:</span>
                  <span className="access-final-crossed">5999/-</span>
                </div>
                <div className="access-final-offer">
                  <span className="access-final-label-big">FINAL PRICE:</span>
                  <span className="access-final-green">1499/-</span>
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