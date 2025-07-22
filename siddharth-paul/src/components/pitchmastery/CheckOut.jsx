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
    <div>
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
                <h2 className="offer-title">
                  GET SALES CALL CONFIDENCE - ₹1499/-
                </h2>
              </div>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    How to open any sales call so the prospect actually wants to
                    talk.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    How to build trust & keep control — without sounding
                    desperate.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    How to use simple words, tonality & body language to lead
                    the sale.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    How to handle "I'll think about it" and turn it into a yes
                    without pushiness.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    How to follow up without sounding needy — get real scripts
                    for cold calls, warm calls & DMs.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    Role-play recordings so you see exactly how to do it in B2B
                    and B2C.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>Checklists and call audits so you never miss a step.</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>Plug & play PDF frameworks to prep before every call.</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>The hidden psychology behind closing high-ticket deals.</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon" style={{ color: "#00C800" }}>
                    ✓
                  </div>
                  <p>
                    And the mindset shift you need to never freeze up again.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-section">
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="bonus-offers">
                  {addonList.length > 0 && (
                    <React.Fragment>
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
                    </React.Fragment>
                  )}
                </div>
                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">Base Course:</span>
                    <span className="price-amount">{price}/-</span>
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
