import React from 'react';
import '../Component_Styles/ObjectiveSection.css';

const ObjectiveSection = () => {
    const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector('.global-magnet-checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="objective-main-section">
      <div className="objective-main-container">
        <p className="objective-purple-subtitle">MY OBJECTIVE HERE IS SIMPLE...</p>
        
        <h2 className="objective-main-heading">
          HELPING YOU <span className="objective-underlined-text">MASTER SALES CALLS</span> THAT <span className="objective-underlined-text">CLOSE BIG DEALS</span> —<br />
          BY DOING THE HEAVY LIFTING FOR YOU...<br />
          PLUS GIVING YOU <span className="objective-underlined-text">PROVEN SCRIPTS, FRAMEWORKS</span><br />
          & <span className="objective-underlined-text">LIVE EXAMPLES</span> TO CLOSE MORE EVERY WEEK.
        </h2>

        <div className="objective-intro-section">
          <p className="objective-intro-text">
            Here's just a mere fraction of the <span className="objective-bold-text">golden nuggets you'll<br />
            discover</span> with THIS COURSE...
          </p>
        </div>

        <div className="objective-benefits-container">
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Learn exactly what to say-</span> No more guessing. Get word-for-word frameworks for calls, chats & follow-ups.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Handle any objection with confidence-</span> Know how to turn "I'll think about it" into a "Yes!" without sounding pushy.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Copy my real closing system-</span> Get proven scripts, roleplay videos, and call recordings so you see how it's done step-by-step.
            </div>
          </div>
        </div>

        <button onClick={scrollToCheckout} className="objective-access-button">
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default ObjectiveSection;