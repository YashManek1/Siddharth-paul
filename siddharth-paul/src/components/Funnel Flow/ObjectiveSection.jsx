import React from 'react';
import './ObjectiveSection.css';

const ObjectiveSection = () => {
  return (
    <section className="objective-main-section">
      <div className="objective-main-container">
        <p className="objective-purple-subtitle">MY OBJECTIVE HERE IS SIMPLE...</p>
        
        <h2 className="objective-main-heading">
          HELPING YOU BUILD <span className="objective-underlined-text">HIGH-CONVERTING FUNNELS</span><br />
          BY DOING THE STRATEGY & STRUCTURE FOR YOU...<br />
          PLUS GIVING YOU THE <span className="objective-underlined-text">EXACT ROADMAP</span> & <span className="objective-underlined-text">FRAMEWORK</span> TO<br />
          LAUNCH & OPTIMIZE PROFITABLE FUNNELS IN <span className="objective-underlined-text">RECORD TIME</span>.
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
              <span className="objective-benefit-heading">Map Out Winning Funnels-</span> Learn how to design powerful funnel stages (TOFU, MOFU, BOFU) that move cold leads to buyers on autopilot.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Psychology & Journey-</span> Understand exactly what your customers think at each stage so you can craft messaging, offers, and upsells that convert like crazy.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Optimize & Scale Fast-</span> Fix funnel leaks, run effective A/B tests, and use proven checklists to launch, track, and scale your funnels — without wasting money or guessing.
            </div>
          </div>
        </div>

        <button className="objective-access-button">
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default ObjectiveSection;