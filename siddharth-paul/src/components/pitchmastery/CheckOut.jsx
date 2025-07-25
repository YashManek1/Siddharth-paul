import React, { useState, useMemo, useEffect } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";
import { useNavigate } from "react-router-dom";

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

const PitchMasteryCheckout = ({ price, finalPrice, addons }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });
  const navigate = useNavigate();
  const addonList = useMemo(() => parseAddons(addons), [addons]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

  const calculateTotalBreakdown = () => {
    let base = Number(finalPrice || 0);
    addonList.forEach((addon, idx) => {
      if (selectedAddons.includes(idx)) {
        base += Number(addon.price || 0);
      }
    });
    const gst = Math.round(base * 0.18);
    const total = base + gst;
    return { base, gst, total };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { total } = calculateTotalBreakdown();

    const res = await fetch(
      "https://siddharth-paul.onrender.com/payment/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount: total }),
      }
    );
    const order = await res.json();

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please refresh and try again.");
      return;
    }

    const options = {
      key: "rzp_live_3FWTV5BEFo9CuJ",
      amount: order.amount,
      currency: order.currency,
      name: "Pitch Mastery",
      description: "Course Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            addons: selectedAddons.map((idx) => addonList[idx]),
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        navigate("/afterpaymentpm");
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: "#0077ff" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const { base, gst, total } = calculateTotalBreakdown();

  return (
    <div className="global-magnet-checkout">
      <div className="checkout-container">
        <header className="checkout-header">
          <div className="brand-logo">
            <span className="logo-icon">🎤</span>
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

                {/* Add-ons section with label - ONLY ADDITION */}
                {selectedAddons.length > 0 && (
                  <div className="addons-section">
                    <div className="addons-label">Add-ons</div>
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
                  </div>
                )}

                <div className="total-section">
                  <div className="total-row">
                    <span className="total-label">Base Price:</span>
                    <span className="total-amount">{base}/-</span>
                  </div>
                  <div className="total-row">
                    <span className="total-label">GST (18%):</span>
                    <span className="total-amount">{gst}/-</span>
                  </div>
                  <div className="total-row">
                    <span className="total-label">
                      <b>TOTAL:</b>
                    </span>
                    <span className="total-amount">
                      <b>{total}/-</b>
                    </span>
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  SUBMIT!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="gst-breakdown">
          <div>Price: {base}/-</div>
          <div>GST (18%): {gst}/-</div>
          <div>
            <b>Total Paid: {total}/-</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchMasteryCheckout;