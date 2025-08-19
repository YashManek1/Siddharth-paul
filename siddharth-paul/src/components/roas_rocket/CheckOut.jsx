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

const RoasRocketCheckout = ({ price, finalPrice, addons }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });
  const navigate = useNavigate();
  const addonList = useMemo(() => parseAddons(addons), [addons]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const handleAddonChange = (idx) => {
    setSelectedAddons((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Coupon apply handler
  const handleApplyCoupon = async () => {
    setCouponError("");
    setCouponApplied(false);
    setDiscountPercent(0);
    if (!formData.email) {
      setCouponError("Enter your email before applying coupon.");
      return;
    }
    try {
      const res = await fetch(
        "https://siddharth-paul.onrender.com/coupon/apply",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coupon, email: formData.email }),
        }
      );
      const data = await res.json();
      if (data.success) {
        setDiscountPercent(data.discountPercent);
        setCouponApplied(true);
        setCouponError("");
      } else {
        setCouponError(data.message || "Invalid coupon.");
        setCouponApplied(false);
        setDiscountPercent(0);
      }
    } catch (err) {
      setCouponError("Server error. Try again.");
      setCouponApplied(false);
      setDiscountPercent(0);
    }
  };

  const calculateTotalBreakdown = () => {
    let base = Number(finalPrice || 0);
    addonList.forEach((addon, idx) => {
      if (selectedAddons.includes(idx)) {
        base += Number(addon.price || 0);
      }
    });
    let discount = 0;
    if (discountPercent > 0) {
      discount = Math.round(base * (discountPercent / 100));
      base = base - discount;
    }
    const gst = Math.round(base * 0.18);
    const total = base + gst;
    return { base, gst, total, discount };
  };

  // Always submit form data to backend (Google Sheets) before payment
  const submitFormDataToSheets = async () => {
    try {
      await fetch("https://siddharth-paul.onrender.com/api/client-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "checkout",
          product: "ROAS Rocket",
          amount: calculateTotalBreakdown().total,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      // Optionally log error, but don't block user
      console.error("Error submitting to Google Sheets:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { total } = calculateTotalBreakdown();

    // Always submit form data to backend (Google Sheets) first
    await submitFormDataToSheets();

    // 1. Create Razorpay order via backend
    let order;
    try {
      const res = await fetch(
        "https://siddharth-paul.onrender.com/payment/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ totalAmount: total }),
        }
      );
      order = await res.json();
    } catch (err) {
      alert("Could not initiate payment. Please try again later.");
      return;
    }

    // 2. Check if Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please refresh and try again.");
      return;
    }

    // 3. Open Razorpay modal
    const options = {
      key: "rzp_live_3FWTV5BEFo9CuJ",
      amount: order.amount,
      currency: order.currency,
      name: "Roas Rocket",
      description: "Course Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "checkout",
            product: "ROAS Rocket",
            addons: selectedAddons.map((idx) => addonList[idx]),
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        localStorage.setItem("hasPaid_rr", "true");
        navigate("/afterpaymentrr");
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: "#ff6f00" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const { base, gst, total, discount } = calculateTotalBreakdown();

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
                <span style={{ color: "white" }}>₹{finalPrice}/-</span>
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
                {/* Coupon Section */}
                <div className="form-group">
                  <label htmlFor="coupon">Coupon Code</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      id="coupon"
                      name="coupon"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      disabled={couponApplied}
                    />
                    <button
                      type="button"
                      className="apply-button"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied}
                    >
                      {couponApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {couponError && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {couponError}
                    </div>
                  )}
                  {couponApplied && (
                    <div style={{ color: "green", fontSize: "12px" }}>
                      Coupon applied! {discountPercent}% off.
                    </div>
                  )}
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
                              <span className="price-label">
                                {addon.title}:
                              </span>
                              <span className="price-amount">
                                +{addon.price}/-
                              </span>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )}

                <div className="total-section">
                  {discount > 0 && (
                    <div className="total-row">
                      <span className="total-label">Discount:</span>
                      <span className="total-amount">- {discount}/-</span>
                    </div>
                  )}
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
      </div>
    </div>
  );
};

export default RoasRocketCheckout;
