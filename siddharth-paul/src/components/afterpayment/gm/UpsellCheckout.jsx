import React, { useState, useEffect } from "react";
import "../../Component_Styles/GlobalMagnetCheckout.css";

const UpsellCheckout = ({
  price = "4999",
  finalPrice = "4999",
  title = "4 PERSONAL CALLS [1-1]",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });
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
          source: "upsell", // Differentiate from popup
          product: "Global Magnet",
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
      name: "Global Magnet Upsell",
      description: "Upsell Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "upsell",
            product: "Global Magnet Upsell",
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        // Navigate to thank you or success page
        window.location.reload(); // Refresh to show thank you message
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: "#9d00ff" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const { base, gst, total, discount } = calculateTotalBreakdown();

  return (
    <div className="global-magnet-checkout" id="upsell-checkout">
      <div className="checkout-container">
        <header className="checkout-header">
          <div className="brand-logo">
            <span className="logo-icon">🔥</span>
            <span className="brand-name">GLOBAL MAGNET UPSELL</span>
          </div>
        </header>
        <div className="checkout-content">
          <div className="left-section">
            <div className="offer-header">
              <h2
                className="offer-title"
                style={{ color: "#fff", background: "transparent" }}
              >
                {title} -{" "}
                <span style={{ color: "#9d00ff" }}>{finalPrice}/-</span>
              </h2>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#9d00ff" }}>
                  ✓
                </div>
                <p>
                  4 Personal 1-1 calls with Siddharth to perfect your client
                  acquisition
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#9d00ff" }}>
                  ✓
                </div>
                <p>
                  Get step-by-step guidance to land your first $1,000-$5,000
                  client
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{ color: "#9d00ff" }}>
                  ✓
                </div>
                <p>Close deals with confidence using proven techniques</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactInfo">Contact Info</label>
                <input
                  type="tel"
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
                ></textarea>
              </div>

              <div className="coupon-section">
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

              <div className="total-section">
                {discount > 0 && (
                  <div className="total-row">
                    <span className="total-label">
                      <b>Discount ({discountPercent}%):</b>
                    </span>
                    <span className="total-amount">
                      <b>-{discount}/-</b>
                    </span>
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
                ACCESS NOW!
              </button>
            </form>
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

export default UpsellCheckout;
