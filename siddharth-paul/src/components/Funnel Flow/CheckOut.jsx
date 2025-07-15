import React, { useState } from 'react';
import '../Component_Styles/GlobalMagnetCheckout.css';

const GlobalMagnetCheckout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactInfo: '',
    address: ''
  });

  const [addons, setAddons] = useState({
    winningFunnelSwipe: { selected: false, price: 997 },
    preLaunchAudit: { selected: false, price: 497 },
    funnelLaunchCalendar: { selected: false, price: 1497 }
  });

  const basePrice = 1999;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddonChange = (addonKey) => {
    setAddons(prev => ({
      ...prev,
      [addonKey]: {
        ...prev[addonKey],
        selected: !prev[addonKey].selected
      }
    }));
  };

  const calculateTotal = () => {
    let total = basePrice;
    Object.values(addons).forEach(addon => {
      if (addon.selected) {
        total += addon.price;
      }
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      addons: addons,
      total: calculateTotal()
    };
    console.log('Order submitted:', orderData);
  };

  return (
    <div className="global-magnet-checkout">
      <div className="checkout-container">
        <header className="checkout-header">
          <div className="brand-logo">
            <span className="logo-icon">🌟</span>
            <span className="brand-name">FUNNEL FLOW</span>
          </div>
        </header>

        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2 className="offer-title">MASTER FUNNELS THAT PRINT CASH ON DEMAND - 1999/-</h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Understand how winning funnels really work so you build them right from day one.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Learn how to map your buyer's mindset and behaviour at every stage — so you guide them naturally to buy.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Discover which funnel to pick (TOFU, MOFU, BOFU) based on your offer and traffic source — no more guesswork.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Steal what's already working with ethical funnel hacking so you can shortcut your success.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Get frameworks for landing pages, thank you pages, upsell pages and more — write copy that converts.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Set up your funnels to capture leads, trigger automations, and follow up without leaks.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Make sure your funnel is built to handle paid traffic — check loading speed, mobile, CTAs and tracking.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Learn how to test your pages, offers and steps so you always know what's working.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Launch with confidence, track key metrics (opt-in rates, EPC, CPA) and spot leaks fast.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Turn one funnel into an evergreen asset — keep improving it with real data so your ROAS climbs month after month.</p>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="form-container">
              <h3 className="form-title">YOUR DETAILS</h3>
              
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactInfo">Contact info</label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="bonus-offers">
                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="winningFunnelSwipe"
                        checked={addons.winningFunnelSwipe.selected}
                        onChange={() => handleAddonChange('winningFunnelSwipe')}
                      />
                      <label htmlFor="winningFunnelSwipe">
                        <span className="bonus-title">
                          Yes! Add the Winning Funnel Swipe File- 997/-
                        </span>
                        <span className="bonus-description">
                          Stop guessing what high-converting funnels look like. Inside the Swipe Vault, you'll get real examples of funnel pages, headlines, CTAs, upsell structures and entire flow maps from million-dollar funnels — giving you plug-and-play inspiration so you can build faster and smarter.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="preLaunchAudit"
                        checked={addons.preLaunchAudit.selected}
                        onChange={() => handleAddonChange('preLaunchAudit')}
                      />
                      <label htmlFor="preLaunchAudit">
                        <span className="bonus-title">
                          Yes! Add the Pre-Launch Funnel Audit Checklist- 497/-
                        </span>
                        <span className="bonus-description">
                          Never launch a funnel with broken links, missing tracking or overlooked steps again. You'll get a step-by-step checklist to audit every page, form, pixel, upsell and automation — so you hit publish with 100% confidence and zero funnel leaks.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="funnelLaunchCalendar"
                        checked={addons.funnelLaunchCalendar.selected}
                        onChange={() => handleAddonChange('funnelLaunchCalendar')}
                      />
                      <label htmlFor="funnelLaunchCalendar">
                        <span className="bonus-title">
                          Yes! Add the 7-Figure Funnel Launch Calendar- 1497/-
                        </span>
                        <span className="bonus-description">
                          Inside, you'll get:
                          <br />✓ Day-by-Day Roadmap: Know exactly what tasks to complete each week — from funnel building to ad testing to email sequences.
                          <br />✓ Key Metrics Checkpoints: Spot funnel leaks early by tracking the right numbers at the right stages.
                          <br />✓ Pro-Level Promotion Plan: Map out your warm-up, launch, and post-launch follow-ups to maximise sales.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">Base Course:</span>
                    <span className="price-amount">${basePrice}</span>
                  </div>
                  
                  {addons.winningFunnelSwipe.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Winning Funnel Swipe File:</span>
                      <span className="price-amount">+${addons.winningFunnelSwipe.price}</span>
                    </div>
                  )}
                  
                  {addons.preLaunchAudit.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Pre-Launch Funnel Audit Checklist:</span>
                      <span className="price-amount">+${addons.preLaunchAudit.price}</span>
                    </div>
                  )}
                  
                  {addons.funnelLaunchCalendar.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">7-Figure Funnel Launch Calendar:</span>
                      <span className="price-amount">+${addons.funnelLaunchCalendar.price}</span>
                    </div>
                  )}
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span className="total-label">TOTAL:</span>
                    <span className="total-amount">${calculateTotal()}</span>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  SUBMIT!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMagnetCheckout;
