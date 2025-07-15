import React, { useState } from 'react';
import './GlobalMagnetCheckout.css';

const GlobalMagnetCheckout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactInfo: '',
    address: ''
  });

  const [addons, setAddons] = useState({
    premiumCaseStudy: { selected: false, price: 999 },
    recessionProofPricing: { selected: false, price: 497 },
    profitPitchHooks: { selected: false, price: 297 }
  });

  const basePrice = 1499;

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
            <span className="brand-name">GLOBAL MAGNET</span>
          </div>
        </header>

        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2 className="offer-title">GET YOUR IRRESISTIBLE OFFER MASTERED -1499/-</h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Craft offers that make clients say "YES" instantly — learn to design high-ticket, irresistible pitches that stand out in any market.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Master value stacking, urgency, and risk reversal — get the psychology-backed frameworks to make your offer a no-brainer.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Become the obvious, only choice — build messaging so strong that premium clients choose you even before seeing alternatives.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Fill-in-the-blank templates & checklists — never stare at a blank page again; just follow the proven steps.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>AI-enhanced offer prompts & examples — shortcut creation time and make your offers sharper and more persuasive.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Headlines & messaging formulas — grab attention fast and move clients from "interested" to "sold."</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Build trust at every stage — learn how to present proof, bonuses, and guarantees that kill objections before they even exist.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Step-by-step offer testing process — refine and improve your pitch consistently before going live.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Complete video breakdowns — see real-world techniques and learn exactly what works in the best offers.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Psychological triggers for premium sales — move beyond features and benefits into deep emotional connection that commands higher prices.</p>
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
                        id="premiumCaseStudy"
                        checked={addons.premiumCaseStudy.selected}
                        onChange={() => handleAddonChange('premiumCaseStudy')}
                      />
                      <label htmlFor="premiumCaseStudy">
                        <span className="bonus-title">
                          The Premium Case Study Vault - 999/-
                        </span>
                        <span className="bonus-description">
                          ✓ Get exclusive access to a vault of real-life, high-converting offers and proposals that closed ₹1L–₹5L+ deals.
                          <br />✓ Breakdown videos explaining exactly why they worked.
                          <br />✓ Reverse-engineer proven strategies and instantly model them in your own pitches.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="recessionProofPricing"
                        checked={addons.recessionProofPricing.selected}
                        onChange={() => handleAddonChange('recessionProofPricing')}
                      />
                      <label htmlFor="recessionProofPricing">
                        <span className="bonus-title">
                          Yes! Add the "Recession-Proof" Pricing Strategy Mini-Course. - 497/-
                        </span>
                        <span className="bonus-description">
                          ✓ Learn how to confidently set and hold premium prices even during slow markets.
                          <br />✓ Discover psychology-backed pricing levers that make your offers irresistible.
                          <br />✓ Never undercharge or feel uncertain about your pricing again.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="profitPitchHooks"
                        checked={addons.profitPitchHooks.selected}
                        onChange={() => handleAddonChange('profitPitchHooks')}
                      />
                      <label htmlFor="profitPitchHooks">
                        <span className="bonus-title">
                          Yes! Add 10 Plug & Play "Profit Pitch" Hooks & Templates - 297/-
                        </span>
                        <span className="bonus-description">
                          ✓ Copy-paste pitch openers and angles for different types of services.
                          <br />✓ Designed to instantly capture attention and trigger curiosity.
                          <br />✓ Tested with both service-based and consulting offers.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">Base Course:</span>
                    <span className="price-amount">₹{basePrice}</span>
                  </div>
                  
                  {addons.premiumCaseStudy.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Premium Case Study Vault:</span>
                      <span className="price-amount">+₹{addons.premiumCaseStudy.price}</span>
                    </div>
                  )}
                  
                  {addons.recessionProofPricing.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Recession-Proof Pricing Strategy:</span>
                      <span className="price-amount">+₹{addons.recessionProofPricing.price}</span>
                    </div>
                  )}
                  
                  {addons.profitPitchHooks.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Profit Pitch Hooks & Templates:</span>
                      <span className="price-amount">+₹{addons.profitPitchHooks.price}</span>
                    </div>
                  )}
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span className="total-label">TOTAL:</span>
                    <span className="total-amount">₹{calculateTotal()}</span>
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