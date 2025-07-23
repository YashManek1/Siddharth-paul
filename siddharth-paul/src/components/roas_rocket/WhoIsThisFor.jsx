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
                  <h3 className="who-this-is-for-item-title">Performance Marketers</h3>
                  <p className="who-this-is-for-item-desc">
                    Ready to run ads that deliver real profit — not just clicks and views.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Growth-Driven Founders</h3>
                  <p className="who-this-is-for-item-desc">
                    Serious about scaling their offers with tested ad frameworks.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Number Checkers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who want to track numbers and make ads better all the time.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Action Takers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who want to do the work, not just think about it.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Creative Doers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who like to test new ideas and make ads that stand out.
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
                  <h3 className="who-this-is-for-item-title">Shortcut Hunters</h3>
                  <p className="who-this-is-for-item-desc">
                    People who want quick results with no work.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Dreamers Only</h3>
                  <p className="who-this-is-for-item-desc">
                    People who just watch videos but never try.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Guessers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who run random ads without a plan.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Tiny Spenders</h3>
                  <p className="who-this-is-for-item-desc">
                    People who never want to spend money on ads.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Lazy Watchers</h3>
                  <p className="who-this-is-for-item-desc">
                    People who don't want to test and fix their ads.
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