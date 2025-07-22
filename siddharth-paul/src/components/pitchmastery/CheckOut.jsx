import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Improved parseAddons to handle missing numbers, extra dashes, and proper line breaks
function parseAddons(addons) {
  if (!addons) return [];
  // Normalize line endings and remove stray slashes
  const clean = addons.replace(/\?\/-/g, "").replace(/\r\n|\r/g, "\n");
  // Split by numbered pattern (handles both "1." and "2.")
  const items = clean.split(/(?=\d+\.\s)/g).filter(Boolean);
  return items.map((item, idx) => {
    // Try to match: 1. Title — 999/-\nDescription...
    const match = item.match(
      /^(\d+)\.\s*([^-–—\n]+)[-–—]?\s*([₹$]?\d+[/-]*)?\s*\n?([\s\S]*)/m
    );
    if (match) {
      return {
        number: match[1],
        title: match[2].trim(),
        price: match[3] ? match[3].replace(/[^\d]/g, "") : "",
        description: match[4] ? match[4].replace(/\\n/g, "\n").trim() : "",
      };
    }
    // If no number, try to match: Title — 999/-\nDescription...
    const altMatch = item.match(
      /^([^-–—\n]+)[-–—]?\s*([₹$]?\d+[/-]*)?\s*\n?([\s\S]*)/m
    );
    if (altMatch) {
      return {
        number: String(idx + 1),
        title: altMatch[1].trim(),
        price: altMatch[2] ? altMatch[2].replace(/[^\d]/g, "") : "",
        description: altMatch[3]
          ? altMatch[3].replace(/\\n/g, "\n").trim()
          : "",
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

const PitchMasteryCheckout = ({ price, finalPrice, addons }) => {
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
                  How to use simple words, tonality & body language to lead the
                  sale.
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
                  How to follow up without sounding needy — get real scripts for
                  cold calls, warm calls & DMs.
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
                <p>And the mindset shift you need to never freeze up again.</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="form-container">
              <h3 className="form-title">YOUR DETAILS</h3>
              <form onSubmit={handleSubmit} className="checkout-form">
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

export default PitchMasteryCheckout;
