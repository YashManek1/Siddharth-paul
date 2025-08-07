import React, { useState, useEffect } from "react";
import "../Component_Styles/UpsellCheckout.css";

const RoasRocketUpsellCheckout = () => {
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
    fetch("https://siddharth-paul.onrender.com/courses/Roas Rocket")
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
        product: "Roas Rocket Upsell",
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
      name: "Roas Rocket Upsell",
      description: "Upsell Purchase",
      order_id: order.id,
      handler: async function (response) {
        await fetch("https://siddharth-paul.onrender.com/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "upsell-checkout",
            product: "Roas Rocket Upsell",
            total,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        window.location.href = "/thankyou-final";
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
    return <div className="roas-rocket-checkout">Loading...</div>;
  }

  if (!courseData) {
    return (
      <div className="roas-rocket-checkout">Failed to load course data</div>
    );
  }

  const { base, gst, total, discount } = calculateTotalBreakdown();

  return (
    <div className="roas-rocket-checkout" id="roas-rocket-checkout">
      <div className="roas-rocket-container">
        <header className="roas-rocket-header">
          
        </header>

        <div className="upsell-checkout-content">
          <div className="upsell-right-section">
            <div className="upsell-form-container">
              <h3 className="upsell-form-title">
                COMPLETE YOUR UPSELL - ₹
                {courseData?.afterPaymentPrice || "1499"}/-
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="upsell-form-group">
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
                <div className="upsell-form-group">
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
                    required
                  />
                </div>
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
                <div className="upsell-total-section">
                  {discount > 0 && (
                    <div className="upsell-total-row">
                      <span className="upsell-total-label">
                        <b>Discount ({discountPercent}%):</b>
                      </span>
                      <span className="upsell-total-amount">
                        <b>-₹{discount}/-</b>
                      </span>
                    </div>
                  )}
                  <div className="upsell-total-row">
                    <span className="upsell-total-label">Base Price:</span>
                    <span className="upsell-total-amount">₹{base}/-</span>
                  </div>
                  <div className="upsell-total-row">
                    <span className="upsell-total-label">GST (18%):</span>
                    <span className="upsell-total-amount">₹{gst}/-</span>
                  </div>
                  <div className="upsell-total-row">
                    <span className="upsell-total-label">
                      <b>TOTAL:</b>
                    </span>
                    <span className="upsell-total-amount">
                      <b>₹{total}/-</b>
                    </span>
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

export default RoasRocketUpsellCheckout;
