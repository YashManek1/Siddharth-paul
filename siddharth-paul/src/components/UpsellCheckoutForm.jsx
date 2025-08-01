import React, { useState } from "react";
import "./Component_Styles/UpsellCheckout.css";

const UpsellCheckoutForm = ({ courseData, productName, icon, themeColor, onPaymentSuccess }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
    let base = Number(courseData?.afterPaymentFinalPrice || 0);
    let discount = 0;
    if (discountPercent > 0) {
      discount = Math.round(base * (discountPercent / 100));
      base = base - discount;
    }
    const gst = Math.round(base * 0.18);
    const total = base + gst;
    return { base, gst, total, discount };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { total } = calculateTotalBreakdown();
    await fetch("https://siddharth-paul.onrender.com/api/client-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        source: "upsell-checkout",
        product: productName,
        originalPrice: courseData?.afterPaymentPrice,
        finalPrice: courseData?.afterPaymentFinalPrice,
        discountPercent: discountPercent,
        couponCode: couponApplied ? coupon : "",
        amount: total,
        timestamp: new Date().toISOString(),
      }),
    });
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
      name: productName,
      description: "Upsell Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "upsell-checkout",
            product: productName,
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        if (onPaymentSuccess) onPaymentSuccess();
        else window.location.href = "/thankyou-final";
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: themeColor || "#9932cc" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSkip = () => {
    window.location.href = "/final-thankyou";
  };

  const { base, gst, total, discount } = calculateTotalBreakdown();

  return (
    <div className="form-container">
      <h3 className="form-title">
        COMPLETE YOUR ORDER - ₹{courseData?.afterPaymentFinalPrice || "-"}/-
      </h3>
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
            <div style={{ color: "red", fontSize: "12px" }}>{couponError}</div>
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
                <b>-₹{discount}/-</b>
              </span>
            </div>
          )}
          <div className="total-row">
            <span className="total-label">Subtotal:</span>
            <span className="total-amount">₹{base}/-</span>
          </div>
          <div className="total-row">
            <span className="total-label">GST (18%):</span>
            <span className="total-amount">₹{gst}/-</span>
          </div>
          <div className="total-row" style={{ background: "#222", color: "#fff", fontWeight: "bold", fontSize: "1.3em", borderRadius: "8px", margin: "16px 0 0 0", padding: "12px" }}>
            <span className="total-label">TOTAL:</span>
            <span className="total-amount">₹{total}/-</span>
          </div>
        </div>
        <button type="submit" className="submit-button">
          COMPLETE PURCHASE!
        </button>
        <p className="skip-text" onClick={handleSkip} style={{ cursor: "pointer" }}>
          I AM FINE WITH LOSING MONEY AND TIME
        </p>
      </form>
    </div>
  );
};

export default UpsellCheckoutForm;
