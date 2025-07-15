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
    hookHeadlineSwipe: { selected: false, price: 997 },
    winningCreativeVault: { selected: false, price: 497 },
    scalingChecklist: { selected: false, price: 497 }
  });

  const basePrice = 2499;

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
            <span className="logo-icon">🚀</span>
            <span className="brand-name">ROAS ROCKET</span>
          </div>
        </header>

        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2 className="offer-title">GET YOUR 10X ROAS ROCKET SYSTEM: 2499/-</h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to make ads that give you back 10X what you spend.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to write hooks that grab attention fast.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to plan scripts people actually watch.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to film & edit simple but pro ads.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to test lots of ads without losing money.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to scale winning ads the right way.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to track your ads and fix bad ones fast.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to use ad psychology to make people buy.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to copy real winning case studies that work today.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to follow easy checklists so you never miss a step.</p>
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
                        id="hookHeadlineSwipe"
                        checked={addons.hookHeadlineSwipe.selected}
                        onChange={() => handleAddonChange('hookHeadlineSwipe')}
                      />
                      <label htmlFor="hookHeadlineSwipe">
                        <span className="bonus-title">
                          Yes! Add the Hook & Headline Swipe File - 997/-
                        </span>
                        <span className="bonus-description">
                          ✓ 50+ winning hooks & headlines you can use now.
                          <br />✓ No more guessing what to write.
                          <br />✓ Works for any niche.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="winningCreativeVault"
                        checked={addons.winningCreativeVault.selected}
                        onChange={() => handleAddonChange('winningCreativeVault')}
                      />
                      <label htmlFor="winningCreativeVault">
                        <span className="bonus-title">
                          Yes! Add the Winning Creative Vault - 497/-
                        </span>
                        <span className="bonus-description">
                          ✓ See my top ads with breakdowns on why they work.
                          <br />✓ Steal ideas & angles for your own ads.
                          <br />✓ Stay ahead of boring copycats.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="scalingChecklist"
                        checked={addons.scalingChecklist.selected}
                        onChange={() => handleAddonChange('scalingChecklist')}
                      />
                      <label htmlFor="scalingChecklist">
                        <span className="bonus-title">
                          Yes! Add the Scaling Checklist & Budget Tracker - 497/-
                        </span>
                        <span className="bonus-description">
                          ✓ Simple checklist to follow when scaling your ads.
                          <br />✓ Know when to spend more and when to pause.
                          <br />✓ Use my budget tracker sheet to stay profitable every month.
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
                  
                  {addons.hookHeadlineSwipe.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Hook & Headline Swipe File:</span>
                      <span className="price-amount">+₹{addons.hookHeadlineSwipe.price}</span>
                    </div>
                  )}
                  
                  {addons.winningCreativeVault.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Winning Creative Vault:</span>
                      <span className="price-amount">+₹{addons.winningCreativeVault.price}</span>
                    </div>
                  )}
                  
                  {addons.scalingChecklist.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Scaling Checklist & Budget Tracker:</span>
                      <span className="price-amount">+₹{addons.scalingChecklist.price}</span>
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