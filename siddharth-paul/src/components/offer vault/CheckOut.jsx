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
        const match = addon.match(/([0-9]+)[^0-9]*$/);
        if (match) total += Number(match[1]);
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
                GET YOUR IRRESISTIBLE OFFER MASTERED -1499/-
              </h2>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Craft offers that make clients say "YES" instantly — learn to
                  design high-ticket, irresistible pitches that stand out in any
                  market.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Master value stacking, urgency, and risk reversal — get the
                  psychology-backed frameworks to make your offer a no-brainer.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Become the obvious, only choice — build messaging so strong
                  that premium clients choose you even before seeing
                  alternatives.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Fill-in-the-blank templates & checklists — never stare at a
                  blank page again; just follow the proven steps.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  AI-enhanced offer prompts & examples — shortcut creation time
                  and make your offers sharper and more persuasive.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Headlines & messaging formulas — grab attention fast and move
                  clients from "interested" to "sold."
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Build trust at every stage — learn how to present proof,
                  bonuses, and guarantees that kill objections before they even
                  exist.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Step-by-step offer testing process — refine and improve your
                  pitch consistently before going live.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Complete video breakdowns — see real-world techniques and
                  learn exactly what works in the best offers.
                </p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Psychological triggers for premium sales — move beyond
                  features and benefits into deep emotional connection that
                  commands higher prices.
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
                  {addonList.map((addon, idx) => {
                    const isSelected = selectedAddons.includes(idx);
                    const priceMatch = addon.match(/([0-9]+)[^0-9]*$/);
                    const addonPrice = priceMatch ? Number(priceMatch[1]) : 0;
                    return (
                      <div className="bonus-item" key={idx}>
                        <div className="bonus-checkbox">
                          <input
                            type="checkbox"
                            id={`addon-${idx}`}
                            checked={isSelected}
                            onChange={() => handleAddonChange(idx)}
                          />
                          <label htmlFor={`addon-${idx}`}>
                            <span className="bonus-title">{addon}</span>
                            <span className="bonus-description">
                              ✓ Get exclusive access to a vault of real-life,
                              high-converting offers and proposals that closed
                              ₹1L–₹5L+ deals.
                              <br />✓ Breakdown videos explaining exactly why
                              they worked.
                              <br />✓ Reverse-engineer proven strategies and
                              instantly model them in your own pitches.
                            </span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">Base Course:</span>
                    <span className="price-amount">₹{price}</span>
                  </div>

                  {addonList.map((addon, idx) => {
                    const isSelected = selectedAddons.includes(idx);
                    const priceMatch = addon.match(/([0-9]+)[^0-9]*$/);
                    const addonPrice = priceMatch ? Number(priceMatch[1]) : 0;
                    return (
                      isSelected && (
                        <div className="price-row addon-row" key={idx}>
                          <span className="price-label">{addon}:</span>
                          <span className="price-amount">+₹{addonPrice}</span>
                        </div>
                      )
                    );
                  })}
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
