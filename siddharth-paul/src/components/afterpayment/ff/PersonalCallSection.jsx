import React, { useState, useEffect } from "react";
import "./PersonalCallSection.css";
import img1 from "../../../assets/personalcall.svg";
import img2 from "../../../assets/growth.svg";
import img3 from "../../../assets/client.svg";

const PersonalCallsSection = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    fetch("https://siddharth-paul.onrender.com/courses/Funnel Flow")
      .then((res) => res.json())
      .then((data) => setCourseData(data))
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector("#upsell-checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkip = () => {
    window.location.href = "/final-thankyou";
  };

  const price = courseData?.afterPaymentPrice || "4999"
  return (
    <section className="personal-calls-main-section">
      <div className="personal-calls-main-container">
        <h2 className="personal-calls-main-title">
          WHAT YOU WILL GET ACCESS TO:
        </h2>

        <div className="personal-calls-grid-container">
          <div className="personal-calls-card personal-calls-card-calls">
            <h3 className="personal-calls-card-title">1-1 PERSONAL CALL</h3>
            <p className="personal-calls-card-description">
              Get direct, real-time help as we go through your entire funnel
              together — from landing page to thank you page. I'll show you
              exactly what to fix, what to keep, and what to remove so your
              funnel doesn't leak money.
            </p>
            <div className="personal-calls-card-image personal-calls-card-image-large">
              <img src={img1} alt="1-1 Personal call with Siddharth" />
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-growth">
            <h3 className="personal-calls-card-title">
              LIVE REALTIME FEEDBACK
            </h3>
            <p className="personal-calls-card-description">
              We'll dive deep into your funnel copy, headlines, CTAs, offers,
              and visuals — and fix each element that kills conversions. No more
              guessing why your funnel isn't working.
            </p>
            <div className="personal-calls-card-image">
              <img src={img2} alt="Live realtime feedback chart" />
              <div className="growth-overlay">
                <span className="growth-percentage">100X</span>
              </div>
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-close">
            <h3 className="personal-calls-card-title">
              CREATE HIGHLY CONVERTING FUNNEL
            </h3>
            <p className="personal-calls-card-description">
              When we're done, you'll have a final, high-converting funnel that
              you can launch right away — without second guessing or constant
              tweaking. Walk away with a proven roadmap that turns clicks into
              cash.
            </p>
            <div className="personal-calls-card-image">
              <img src={img3} alt="Create highly converting funnel" />
            </div>
          </div>

          <div className="personal-calls-final-price">
            <div className="personal-calls-final-content">
              <div className="personal-calls-final-pricing">
                <span className="personal-calls-price-label">PRICE:</span>
                <span className="personal-calls-final-green">{price}/-</span>
              </div>
              <button
                className="personal-calls-final-button"
                onClick={scrollToCheckout}
              >
                ACCESS NOW!
              </button>
              <p
                className="personal-calls-disclaimer"
                onClick={handleSkip}
                style={{ cursor: "pointer" }}
              >
                I AM FINE WITH LOSING MONEY AND TIME
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCallsSection;
