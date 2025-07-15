import React from 'react';
import './ObjectiveSection.css';

const ObjectiveSection = () => {
  return (
    <section className="objective-main-section">
      <div className="objective-main-container">
        <p className="objective-purple-subtitle">MY OBJECTIVE HERE IS SIMPLE...</p>
        
        <h2 className="objective-main-heading">
          HELPING YOU CRAFT <span className="objective-underlined-text">IRRESISTIBLE,</span><br />
          <span className="objective-underlined-text">HIGH-VALUE OFFERS</span> THAT MAKE CLIENTS SAY<br />
          <span className="objective-underlined-text">"YES"</span> INSTANTLY...
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
              <span className="objective-benefit-heading">Build offers that convert on demand-</span> Learn how to structure and stack value so clients see your offer as a no-brainer investment (not just another service).
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Turn objections into "take my money" moments -</span> Master the psychological triggers and messaging that flip hesitations into instant "yeses," even on premium deals.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Plug-and-play pitch templates-</span> Use proven, fill-in-the-blank frameworks and AI-enhanced prompts to craft powerful, persuasive offers without second-guessing.
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