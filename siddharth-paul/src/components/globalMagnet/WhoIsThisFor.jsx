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
                  <h3 className="who-this-is-for-item-title">Action-Takers</h3>
                  <p className="who-this-is-for-item-desc">
                    Ready to invest in themselves and scale with premium, global clients.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Growth-Focused Entrepreneurs</h3>
                  <p className="who-this-is-for-item-desc">
                    Committed to building predictable high-ticket revenue streams.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Authority Builders</h3>
                  <p className="who-this-is-for-item-desc">
                    Serious about positioning themselves as top experts in their niche.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Systems-Driven</h3>
                  <p className="who-this-is-for-item-desc">
                    Want to leverage proven processes instead of chasing low-ticket gigs.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Global Players</h3>
                  <p className="who-this-is-for-item-desc">
                    Eager to attract 1,000-5,000+ clients across the world.
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
                  <h3 className="who-this-is-for-item-title">Shortcut Seekers</h3>
                  <p className="who-this-is-for-item-desc">
                    Looking for quick hacks without putting in real effort.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Comfort-Zone Lovers</h3>
                  <p className="who-this-is-for-item-desc">
                    Happy sticking with low-paying, local clients forever.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Platform Dependents</h3>
                  <p className="who-this-is-for-item-desc">
                    Content bidding endlessly on Upwork or Fiverr.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Low-Investment Thinkers</h3>
                  <p className="who-this-is-for-item-desc">
                    Unwilling to invest time, money, or energy into real growth.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Hobbyists</h3>
                  <p className="who-this-is-for-item-desc">
                    Not serious about turning their skills into a scalable, premium business.
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