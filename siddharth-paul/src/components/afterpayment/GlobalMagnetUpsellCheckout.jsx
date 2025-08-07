import React, { useState, useEffect } from "react";
import "../Component_Styles/UpsellCheckout.css";

const GlobalMagnetUpsellCheckout = () => {
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
    // Load Razorpay script
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Fetch course data
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(
        "https://siddharth-paul.onrender.com/courses/Global-Magnet"
      );
      const data = await response.json();
      setCourseData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching course data:", error);
      setLoading(false);
    }
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

  // Calculate total with discount and GST
  const calculateTotalBreakdown = () => {
    if (!courseData) return { base: 0, gst: 0, total: 0, discount: 0 };

    // Use afterPaymentPrice (4999) instead of afterPaymentFinalPrice (2999)
    let base = Number(courseData.afterPaymentPrice || 4999);
    let discount = 0;
    if (discountPercent > 0) {
      discount = Math.round(base * (discountPercent / 100));
      base = base - discount;
    }
    const gst = Math.round(base * 0.18);
    const total = base + gst;
    return { base, gst, total, discount };
  }; // Submit form data before payment
  const submitFormData = async () => {
    try {
      await fetch("https://siddharth-paul.onrender.com/api/client-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "upsell-checkout",
          product: "Global Magnet Upsell",
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

    // 1. Create Razorpay order via backend
    const res = await fetch(
      "https://siddharth-paul.onrender.com/payment/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount: total }),
      }
    );
    const order = await res.json();

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
      name: "Global Magnet Upsell",
      description: "Upsell Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
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
      theme: { color: "#9d00ff" },
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
    <div className="global-magnet-checkout" id="global-magnet-checkout">
      <div className="global-magnet-container">
        <header className="global-magnet-header">
        </header>

        <div className="upsell-checkout-content">
          <div className="upsell-right-section">
            <div className="upsell-form-container">
              <h3 className="upsell-form-title">
                COMPLETE YOUR UPSELL - ₹
                {courseData?.afterPaymentPrice || "4999"}/-
              </h3>

              <form onSubmit={handleSubmit} className="upsell-checkout-form">
                <div className="upsell-form-row">
                  <div className="upsell-form-group">
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
                  <div className="upsell-form-group">
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

                <div className="upsell-form-group">
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

                <div className="upsell-form-group">
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
                <div className="upsell-form-group">
                  <label htmlFor="coupon">Coupon Code</label>
                  <div className="upsell-coupon-input-group">
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
                      className="upsell-apply-button"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied}
                    >
                      {couponApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {couponError && (
                    <div className="upsell-coupon-error">
                      {couponError}
                    </div>
                  )}
                  {couponApplied && (
                    <div className="upsell-coupon-success">
                      Coupon applied! {discountPercent}% off.
                    </div>
                  )}
                </div>

                <div className="upsell-price-breakdown">
                  <div className="upsell-price-row">
                    <span className="upsell-price-label">Subtotal:</span>
                    <span className="upsell-price-amount">₹{base + discount}/-</span>
                  </div>
                  {discount > 0 && (
                    <div className="upsell-price-row">
                      <span className="upsell-price-label">
                        Discount ({discountPercent}%):
                      </span>
                      <span className="upsell-price-amount">-₹{discount}/-</span>
                    </div>
                  )}
                  <div className="upsell-price-row">
                    <span className="upsell-price-label">GST (18%):</span>
                    <span className="upsell-price-amount">₹{gst}/-</span>
                  </div>
                </div>

                <div className="upsell-total-section">
                  <div className="upsell-total-row">
                    <span className="upsell-total-label">TOTAL:</span>
                    <span className="upsell-total-amount">₹{total}/-</span>
                  </div>
                </div>
                <button type="submit" className="upsell-submit-button">
                  SUBMIT!
                </button>

                <p className="upsell-skip-text" onClick={handleSkip}>
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

export default GlobalMagnetUpsellCheckout;
