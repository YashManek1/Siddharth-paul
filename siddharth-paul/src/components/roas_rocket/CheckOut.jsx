// (Removed stray code: handleAddonChange, calculateTotal)
import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Robust parseAddons for all edge cases (same as Global Magnet)
function parseAddons(addons) {
  if (!addons) return [];
  // Normalize line endings and slashes
  const clean = addons
    .replace(/\\n/g, "\n")
    .replace(/\\?\/-\s*/g, "")
    .replace(/\r\n|\r/g, "\n");

  // Split on numbers at the start of a line (handles 1. and 2.)
  const items = clean.split(/(?=\d+\.)/g).filter(Boolean);

  return items.map((item, idx) => {
    // Match: 1.Title — 999/-\nDescription...
    const match = item.match(
      /^(\d+)\.\s*([^-–—\n]+)[-–—]?\s*([₹$]?\d+)?\/?-?\s*\n?([\s\S]*)/m
    );
    if (match) {
      return {
        number: match[1],
        title: match[2].replace(/\n/g, " ").replace(/\s+/g, " ").trim(),
        price: match[3] ? match[3].replace(/[^\d]/g, "") : "",
        description: match[4] ? match[4].trim() : "",
      };
    }
    return {
      number: String(idx + 1),
      title: item.trim(),
      price: "",
      description: "",
    };
  });
}

const RoasRocketCheckout = ({ price, finalPrice, addons }) => {
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
    let total = Number(finalPrice || 0);
    addonList.forEach((addon, idx) => {
      if (selectedAddons.includes(idx)) {
        total += Number(addon.price || 0);
      }
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your order logic
    alert("Order placed!");
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
              <h2
                className="offer-title"
                style={{
                  color: "#fff",
                  background: "transparent",
                }}
              >
                GET YOUR 10X ROAS ROCKET SYSTEM -{" "}
                <span style={{ color: "#00FF00" }}>{finalPrice}/-</span>
              </h2>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to make ads that give you back 10X what you spend.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to write hooks that grab attention fast.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to plan scripts people actually watch.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to film & edit simple but pro ads.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to test lots of ads without losing money.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to scale winning ads the right way.</p>
              </div>
              {/* --- NEW BENEFITS --- */}
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to track your ads and fix bad ones fast.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to use ad psychology to make people buy.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>How to copy real winning case studies that work today.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
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
                                <b>{addon.title}</b>
                                {addon.price && ` — ${addon.price}/-`}
                              </span>
                              {addon.description && (
                                <span className="bonus-description">
                                  {addon.description
                                    .split("\n")
                                    .map((line, i) => (
                                      <React.Fragment key={i}>
                                        {line}
                                        <br />
                                      </React.Fragment>
                                    ))}
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
                    <span className="total-amount">{calculateTotal()}/-</span>
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

export default RoasRocketCheckout;
