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
          HELPING YOU LAND <span className="objective-underlined-text">HIGH-PAYING INTERNATIONAL CLIENTS</span><br />
          BY DOING THE HEAVY LIFTING FOR YOU...<br />
          PLUS GIVING YOU THE <span className="objective-underlined-text">EXACT ROADMAP AND GUIDANCE</span> TO<br />
          SECURE YOUR <span className="objective-underlined-text">FIRST 1,000+ CLIENT</span> IN <span className="objective-underlined-text">RECORD TIME</span>.
        </h2>

        <div className="objective-intro-section">
          <p className="objective-intro-text">
            Here's just a mere fraction of the <span className="objective-bold-text">golden nuggets you'll<br />
            discover with</span> THIS COURSE...
          </p>
        </div>

        <div className="objective-benefits-container">
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Generate unlimited chances to win-</span> Most people give up halfway because they don't have a steady pipeline feeding them daily leads — and they're too afraid to truly put themselves out there.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Productize your deliverables-</span> Learn to build systems so you never have to start from scratch with every new client.
            </div>
          </div>
          
          <div className="objective-benefit-row">
            <div className="objective-benefit-text">
              <span className="objective-benefit-heading">Sell high ticket confidently-</span> Master the art of handling objections and get clients to pay you 1,000–5,000 right on the first call.
            </div>
          </div>
        </div>

        <button className="objective-access-button" onClick={scrollToCheckout}>
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default ObjectiveSection;