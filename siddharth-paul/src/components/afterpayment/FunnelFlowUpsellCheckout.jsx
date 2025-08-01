import React, { useState, useEffect } from "react";
import "../Component_Styles/UpsellCheckout.css";

const FunnelFlowUpsellCheckout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });
  const [courseData, setCourseData] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://siddharth-paul.onrender.com/courses/Funnel Flow")
      .then((res) => res.json())
      .then((data) => setCourseData(data))
      .catch(() => setCourseData(null))
      .finally(() => setLoading(false));
  }, []);

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

    // Submit form data before payment
    await fetch("https://siddharth-paul.onrender.com/api/client-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        source: "upsell-checkout",
        product: "Funnel Flow Upsell",
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
      name: "Funnel Flow Upsell",
      description: "Upsell Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "upsell-checkout",
            product: "Funnel Flow Upsell",
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        window.location.href = "/final-thankyou";
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.contactInfo,
      },
      theme: { color: "#00C800" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSkip = () => {
    window.location.href = "/final-thankyou";
  };

  if (loading) {
    return <div className="global-magnet-checkout">Loading...</div>;
  }

  if (!courseData) {
    return (
      <div className="global-magnet-checkout">Failed to load course data</div>
    );
  }

  const { base, gst, total, discount } = calculateTotalBreakdown();

  return (
    <div className="global-magnet-checkout" id="upsell-checkout">
      <div className="checkout-container">
        <header className="checkout-header">
          <div className="brand-logo">
            <span className="logo-icon">🌀</span>
            <span className="brand-name">FUNNEL FLOW UPSELL</span>
          </div>
          <div className="secure-badge">
            <span className="secure-icon">🔒</span>
            <span>Secure Checkout</span>
          </div>
        </header>
        <div
          className="checkout-content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="right-section"
            style={{ width: "100%", maxWidth: 480 }}
          >
            <div className="checkout-form">
              <h2 className="form-title">
                Complete Your Order - ₹{courseData?.afterPaymentPrice || "999"}
                /-
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="contactInfo"
                    placeholder="Phone Number"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
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
                      className="apply-coupon-btn"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied}
                    >
                      {couponApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {couponError && (
                    <div className="coupon-error">{couponError}</div>
                  )}
                  {couponApplied && (
                    <div className="coupon-success">
                      ✓ Coupon applied! {discountPercent}% discount
                    </div>
                  )}
                </div>
                <div className="price-breakdown">
                  {discount > 0 && (
                    <div className="price-row discount">
                      <span>Discount ({discountPercent}%):</span>
                      <span>-₹{discount}/-</span>
                    </div>
                  )}
                  <div className="price-row">
                    <span>Base Price:</span>
                    <span>₹{base}/-</span>
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
                  COMPLETE PURCHASE!
                </button>
                <p
                  className="skip-text"
                  onClick={handleSkip}
                  style={{ cursor: "pointer" }}
                >
                  I AM FINE WITH LOSING MONEY AND TIME
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelFlowUpsellCheckout;
