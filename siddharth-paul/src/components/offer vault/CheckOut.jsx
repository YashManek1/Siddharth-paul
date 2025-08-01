import React, { useState, useMemo, useEffect } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";
import { useNavigate } from "react-router-dom";

function parseAddons(addons) {
  if (!addons) return [];
  const clean = addons
    .replace(/\\n/g, "\n")
    .replace(/\\?\/-\s*/g, "/-")
    .replace(/\r\n|\r/g, "\n");
  const items = clean
    .split(/(?=\d+\.(?:(?=[^–—-])|(?=["\d])))/g)
    .filter(Boolean);
  return items.map((item, idx) => {
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

  // Calculate total with discount and GST
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

  // Submit form data before payment
  const submitFormData = async () => {
    try {
      await fetch("https://siddharth-paul.onrender.com/api/client-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "checkout", // Differentiate from popup
          product: "Offer Vault",
          amount: calculateTotalBreakdown().total,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { total } = calculateTotalBreakdown();

    // Submit form data first (before payment)
    await submitFormData();

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
      name: "Offer Vault",
      description: "Course Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "checkout",
            product: "Offer Vault",
            addons: selectedAddons.map((idx) => addonList[idx]),
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        navigate("/afterpaymentov");
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: "#ff00aa" },
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
            <span className="logo-icon">💎</span>
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
                <span style={{ color: "white" }}>- ₹{finalPrice}/-</span>
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
                  clients from "interested" to "sold."
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

                {/* Add-ons section with label */}
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

export default OfferVaultCheckout;
