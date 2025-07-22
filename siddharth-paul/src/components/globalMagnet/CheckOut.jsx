import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Parse addOns string into array of objects: { number, title, price, description }
function parseAddons(addons) {
  if (!addons) return [];
  // Split by numbered pattern (handles both "1." and "1. ")
  const items = addons.split(/(?=\d+\.\s)/g).filter(Boolean);
  return items.map((item) => {
    // Extract number, title, price, description
    const match = item.match(/(\d+)\.\s*([^\d$\n]+)(?:\s*\$?(\d+))?(.*)/s);
    if (match) {
      return {
        number: match[1],
        title: match[2].trim(),
        price: match[3] ? Number(match[3]) : 0,
        description: match[4] ? match[4].replace(/\n/g, " ").trim() : "",
      };
    }
    return { number: "", title: item.trim(), price: 0, description: "" };
  });
}

const GlobalMagnetCheckout = ({ price, finalPrice, addons }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });

  const addonList = useMemo(() => parseAddons(addons), [addons]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddonChange = (idx) => {
    setSelectedAddons((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const calculateTotal = () => {
    let total = Number(finalPrice || price || 0);
    addonList.forEach((addon, idx) => {
      if (selectedAddons.includes(idx)) {
        total += addon.price || 0;
      }
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      addons: selectedAddons.map((idx) => addonList[idx]),
      total: calculateTotal(),
    };
    console.log("Order submitted:", orderData);
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
              <h2 className="offer-title">
                GET YOUR FIRST INTERNATIONAL CLIENT - ${price}
              </h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to attract high-ticket international clients
                  ($1,000-$5,000+) without cheap platforms or endless cold DMs.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to position yourself as a global authority so premium
                  clients see you as the obvious choice.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to build a systemized pipeline that brings in qualified
                  leads daily — no more guessing or praying for referrals.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  The exact offer structure and path to close clients
                  consistently on the first call.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to create content and messaging that literally builds
                  trust and demand for your services worldwide.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  The mindset shifts needed to move from low-ticket local gigs
                  to consistent $5,000+ retainers with global companies.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to handle objections and turn "maybes" into sales in the
                  process — in one conversation.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Proven methods that position you to maximize your revenue and
                  minimize client headaches.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  How to design a desirable offer so you don't reinvent the
                  wheel for every new client.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Systems to deliver premium results without working 24/7 or
                  showing uncertainty.
                </p>
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
                  {addonList.length > 0 && (
                    <>
                      <h4>Bonus Add-ons</h4>
                      {addonList.map((addon, idx) => (
                        <div className="bonus-item" key={idx}>
                          <div className="bonus-checkbox">
                            <input
                              type="checkbox"
                              id={`addon-${idx}`}
                              checked={selectedAddons.includes(idx)}
                              onChange={() => handleAddonChange(idx)}
                            />
                            <label htmlFor={`addon-${idx}`}>
                              <span className="bonus-title">
                                {addon.number && `${addon.number}. `}
                                {addon.title}
                                {addon.price ? ` - ${addon.price}/-` : ""}
                              </span>
                              {addon.description && (
                                <span className="bonus-description">
                                  {addon.description}
                                </span>
                              )}
                            </label>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">Base Course:</span>
                    <span className="price-amount">${price}</span>
                  </div>

                  {addonList.map(
                    (addon, idx) =>
                      selectedAddons.includes(idx) && (
                        <div className="price-row addon-row" key={idx}>
                          <span className="price-label">{addon.title}:</span>
                          <span className="price-amount">+{addon.price}/-</span>
                        </div>
                      )
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
