import React from 'react';
import './ThankYou.css';
import thankyouSvg from '../../../assets/ty.svg';

const ThankYou = () => {
  return (
    <section className="thankyou-section">
      <div className="thankyou-container">
        <div className="thankyou-image-container">
          <img src={thankyouSvg} alt="Thank you" className="thankyou-image" />
        </div>
        
        <div className="thankyou-content">
          <p className="thankyou-confirmation-text">
            YOU WILL GET THE CONFIRMATION TO YOUR EMAIL IMMEDIATELY<br />
            AND THE CREDENTIALS WITHIN THE NEXT 24 HOURS
          </p>
          
          <div className="thankyou-welcome-container">
            <h2 className="thankyou-welcome-text">
              WELCOME TO THE TRIBE
            </h2>
            <span className="thankyou-graduation-cap">🎓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;