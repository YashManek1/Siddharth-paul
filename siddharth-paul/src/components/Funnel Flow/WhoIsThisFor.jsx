import React from 'react';
import '../Component_Styles/WhoThisIsForSection.css';

const WhoThisIsForSection = () => {
    const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector('.global-magnet-checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="who-this-is-for-main-section">
      <div className="who-this-is-for-container">
        <div className="who-this-is-for-content">
          <div className="who-this-is-for-left">
            <h2 className="who-this-is-for-title">
              WHO THIS IS FOR:
              <span className="who-this-is-for-underline-green"></span>
            </h2>
            
            <div className="who-this-is-for-list">
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Conversion Tweakers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who want to squeeze more sales out of every visitor with smart funnels.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Strategy Builders</h3>
                  <p className="who-this-is-for-item-desc">
                    Entrepreneurs who want to craft intentional customer journeys, not random pages.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Test & Scale Players</h3>
                  <p className="who-this-is-for-item-desc">
                    Action-takers ready to test, optimize, and scale winning funnels fast.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Creative Hackers</h3>
                  <p className="who-this-is-for-item-desc">
                    Business owners hungry to "funnel hack" and adapt what works in their niche.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Lifetime Optimizers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who know funnels are never "done" — always improved for more ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="who-this-is-for-divider"></div>
          
          <div className="who-this-is-for-right">
            <h2 className="who-this-is-for-title">
              WHO THIS IS NOT FOR:
              <span className="who-this-is-for-underline-orange"></span>
            </h2>
            
            <div className="who-this-is-for-list">
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">One-Page Hustlers</h3>
                  <p className="who-this-is-for-item-desc">
                    If you just want a single landing page and hope for the best — this isn't for you.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Lazy Launchers</h3>
                  <p className="who-this-is-for-item-desc">
                    If you're not willing to test, tweak, and refine your funnel for real profit.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Set & Forget Seekers</h3>
                  <p className="who-this-is-for-item-desc">
                    Funnels need optimization — not for people who want to "set it and never touch it".
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Traffic Blamers</h3>
                  <p className="who-this-is-for-item-desc">
                    If you think ads alone fix everything — not understanding funnel flow kills profit.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Freebie Freeloaders</h3>
                  <p className="who-this-is-for-item-desc">
                    Not for people who won't invest time or money to build, launch & scale properly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="who-this-is-for-access-button" onClick={scrollToCheckout}>
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;