import React from 'react';
import '../Component_Styles/WhoThisIsForSection.css';

const WhoThisIsForSection = () => {
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
                  <h3 className="who-this-is-for-item-title">Ambitious Closers</h3>
                  <p className="who-this-is-for-item-desc">
                    Ready to create premium offers and confidently pitch them at ₹1,000–₹5,000+ levels.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Strategic Entrepreneurs</h3>
                  <p className="who-this-is-for-item-desc">
                    Serious about scaling through irresistible offers, not just random services.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Conversion-Focused Marketers</h3>
                  <p className="who-this-is-for-item-desc">
                    Want to master emotional triggers, persuasive messaging, and value stacking.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Action-Takers</h3>
                  <p className="who-this-is-for-item-desc">
                    Willing to test, iterate, and improve their offers for maximum impact.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Long-Term Builders</h3>
                  <p className="who-this-is-for-item-desc">
                    Committed to building a brand and authority, not just chasing quick, one-time gigs.
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
                  <h3 className="who-this-is-for-item-title">Hack Hunters</h3>
                  <p className="who-this-is-for-item-desc">
                    Looking for magic scripts or instant "copy-paste" hacks without real strategy.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Low-Price Service Sellers</h3>
                  <p className="who-this-is-for-item-desc">
                    Content charging peanuts and competing in a race to the bottom.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Comfort-Addicted Freelancers</h3>
                  <p className="who-this-is-for-item-desc">
                    Happy staying in a safe zone with low-ticket, unpredictable work.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Passive Spectators</h3>
                  <p className="who-this-is-for-item-desc">
                    Not willing to put in effort to craft, test, and refine powerful offers.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Non-Committers</h3>
                  <p className="who-this-is-for-item-desc">
                    Not serious about building a high-value, premium business foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="who-this-is-for-access-button">
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;