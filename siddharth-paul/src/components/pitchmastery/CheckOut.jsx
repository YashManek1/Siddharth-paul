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
    chatClosing: { selected: false, price: 997 },
    objectionCards: { selected: false, price: 497 },
    callRecording: { selected: false, price: 1497 }
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
            <span className="logo-icon">🎯</span>
            <span className="brand-name">PITCH MASTERY</span>
          </div>
        </header>

        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2 className="offer-title">GET SALES CALL CONFIDENCE - ₹1499/-</h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to open any sales call so the prospect actually wants to talk.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to build trust & keep control — without sounding desperate.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to use simple words, tonality & body language to lead the sale.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to handle "I'll think about it" and turn it into a yes without pushiness.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>How to follow up without sounding needy — get real scripts for cold calls, warm calls & DMs.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Role-play recordings so you see exactly how to do it in B2B and B2C.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Checklists and call audits so you never miss a step.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>Plug & play PDF frameworks to prep before every call.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>The hidden psychology behind closing high-ticket deals.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{color: '#00C800'}}>✓</div>
                <p>And the mindset shift you need to never freeze up again.</p>
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
                        id="chatClosing"
                        checked={addons.chatClosing.selected}
                        onChange={() => handleAddonChange('chatClosing')}
                      />
                      <label htmlFor="chatClosing">
                        <span className="bonus-title">
                          Yes! 7-Day Chat Closing Challenge - 997/-
                        </span>
                        <span className="bonus-description">
                          Master how to turn cold chats into paying calls:
                          <br />✓ Daily chat prompts and templates to spark sales convos.
                          <br />✓ Mini assignments to practice closing in the DMs.
                          <br />✓ Real feedback so you don't just know it — you DO it.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="objectionCards"
                        checked={addons.objectionCards.selected}
                        onChange={() => handleAddonChange('objectionCards')}
                      />
                      <label htmlFor="objectionCards">
                        <span className="bonus-title">
                          Yes! Add the "No-Fear Objection Cards" Swipe Pack - 497/-
                        </span>
                        <span className="bonus-description">
                          Plug-and-play responses for the top 20+ objections:
                          <br />✓ "It's too expensive..."
                          <br />✓ "I need to talk to my partner..."
                          <br />✓ "Send me more info..."
                          <br />Pull them up before any call. Stop freezing up — handle anything with calm confidence.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bonus-item">
                    <div className="bonus-checkbox">
                      <input 
                        type="checkbox" 
                        id="callRecording"
                        checked={addons.callRecording.selected}
                        onChange={() => handleAddonChange('callRecording')}
                      />
                      <label htmlFor="callRecording">
                        <span className="bonus-title">
                          Yes! Add the Call Recording Breakdown Vault - 1497/-
                        </span>
                        <span className="bonus-description">
                          Watch real sales calls line-by-line, with my commentary showing you what works and what doesn't.
                          <br />✓ Understand exactly why prospects say yes or no.
                          <br />✓ See real objections handled in the wild.
                          <br />✓ Pick up subtle tonality shifts and lines you can steal tomorrow.
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
                  
                  {addons.chatClosing.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">7-Day Chat Closing Challenge:</span>
                      <span className="price-amount">+₹{addons.chatClosing.price}</span>
                    </div>
                  )}
                  
                  {addons.objectionCards.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">No-Fear Objection Cards:</span>
                      <span className="price-amount">+₹{addons.objectionCards.price}</span>
                    </div>
                  )}
                  
                  {addons.callRecording.selected && (
                    <div className="price-row addon-row">
                      <span className="price-label">Call Recording Breakdown Vault:</span>
                      <span className="price-amount">+₹{addons.callRecording.price}</span>
                    </div>
                  )}
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span className="total-label">TOTAL:</span>
                    <span className="total-amount">₹{calculateTotal()}/-</span>
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