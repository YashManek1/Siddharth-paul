import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Improved parseAddons to split each numbered addon into its own box, and parse price correctly
function parseAddons(addons) {
  if (!addons) return [];
  const clean = addons
    .replace(/\\n/g, "\n")
    .replace(/\\?\/-\s*/g, "/-")
    .replace(/\r\n|\r/g, "\n");
  // Split by numbered pattern (handles "1.", "2.", "3." etc. even with quotes or numbers after the dot)
  // This regex splits at: number, dot, then any non-dash (so it won't split inside a price or description)
  const items = clean
    .split(/(?=\d+\.(?:(?=[^–—-])|(?=["\d])))/g)
    .filter(Boolean);
  return items.map((item, idx) => {
    // Match: 1. Title (possibly multiline) — 999/-\n✔️desc\n✔️desc
    const match = item.match(
      /^(\d+)\.\s*([\s\S]+?)[-–—]\s*([₹$]?\d+)\s*\/?-?\s*\n?([\s\S]*)/m
    );
    if (match) {
      return {
        number: match[1],
        title: match[2].replace(/\n/g, " ").replace(/\s+/g, " ").trim(),
        price: match[3].replace(/[^\d]/g, ""),
        description: match[4].trim(),
      };
    }
    // Fallback: try to match title and price, then description
    const altMatch = item.match(
      /^(\d+)\.\s*([\s\S]+?)[-–—]\s*([₹$]?\d+)\s*([\s\S]*)/m
    );
    if (altMatch) {
      return {
        number: altMatch[1],
        title: altMatch[2].replace(/\n/g, " ").replace(/\s+/g, " ").trim(),
        price: altMatch[3].replace(/[^\d]/g, ""),
        description: altMatch[4] ? altMatch[4].trim() : "",
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

const OfferVaultCheckout = ({ price, finalPrice, addons }) => {
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
            <span className="logo-icon">💼</span>
            <span className="brand-name">OFFER VAULT</span>
          </div>
        </header>
        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2
                className="offer-title"
                style={{ color: "#fff", background: "transparent" }}
              >
                GET YOUR IRRESISTIBLE OFFER MASTERED
                <span style={{ color: "#00FF00" }}>- {finalPrice}/-</span>
              </h2>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Craft offers that make clients say “YES” instantly — learn to
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
                  Position yourself as the only choice — build messaging so
                  strong that premium clients choose you over everyone else.
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
                  Headline & messaging formulas — grab attention fast and move
                  clients from “interested” to “sold.”
                </p>
              </div>
              {/* --- NEW BENEFITS --- */}
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Build trust at every stage — learn how to present proof,
                  bonuses, and guarantees that kill objections before they even
                  arise.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Step-by-step offer testing process — refine and improve your
                  pitch confidently before going live.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#00C800" }}>
                  ✓
                </div>
                <p>
                  Complete video breakdowns — see real-world examples and learn
                  exactly what works today.
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

export default OfferVaultCheckout;
