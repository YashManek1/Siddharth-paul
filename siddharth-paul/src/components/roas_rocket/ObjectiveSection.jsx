import React from 'react';
import '../Component_Styles/ObjectiveSection.css';

const ObjectiveSection = () => {
  return (
    <section className="objective-main-section">
      <div className="objective-main-container">
        <p className="objective-purple-subtitle">MY OBJECTIVE HERE IS SIMPLE...</p>
        
        <h2 className="objective-main-heading">
          HELPING YOU HIT <span className="objective-underlined-text">CONSISTENT 10X ROAS</span><br />
          BY DOING THE HEAVY LIFTING FOR YOU...<br />
          PLUS GIVING YOU THE EXACT <span className="objective-underlined-text">TEMPLATES AND ROADMAP</span><br />
          TO <span className="objective-underlined-text">SCALE PROFITABLY</span> EVERY TIME.
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
              <span className="objective-benefit-heading">Unlock winning ad triggers-</span> Learn how to craft scroll-stopping hooks and angles that grab attention and make cold audiences buy.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Create high-converting scripts & visuals-</span> Master the style, editing, and frameworks that turn ordinary ads into profit machines.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Launch & scale profitably-</span> Follow my proven checklist to run, test, and optimize your campaigns so you hit 10X ROAS again and again — with zero guesswork.
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