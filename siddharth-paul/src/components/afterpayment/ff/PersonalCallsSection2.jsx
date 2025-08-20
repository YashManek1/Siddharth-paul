import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalCallSection.css";
import img1 from "../../../assets/personalcall.svg";
import img2 from "../../../assets/growth.svg";
import img3 from "../../../assets/client.svg";

const PersonalCallsSection2 = () => {
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          "https://siddharth-paul.onrender.com/courses/Funnel Flow"
        );
        if (response.ok) {
          const data = await response.json();
          setCourseData(data);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  // const price = courseData?.afterPaymentPrice || "2499";
  // const finalPrice = courseData?.afterPaymentFinalPrice || "1999";

  // Calculate finalPrice from API values (afterPaymentPrice & afterPaymentDiscount)
  const apiPrice = Number(courseData?.afterPaymentPrice ?? 2499);
  const apiDiscountPercent = Number(courseData?.afterPaymentDiscount ?? 0);

  const price = apiPrice;
  const finalPrice = Math.round(
    apiPrice - Math.round((apiPrice * apiDiscountPercent) / 100)
  );

  const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSections = document.querySelectorAll(
      ".global-magnet-checkout, #upsell-checkout"
    );
    if (checkoutSections.length > 0) {
      checkoutSections[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkip = () => {
    navigate("/final-thankyou");
  };

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
              <img src={img1} alt="Personal call with Siddharth" />
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
              <img src={img2} alt="Growth chart showing improvement" />
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
              <img src={img3} alt="Closing deals with clients" />
            </div>
          </div>

          <div className="personal-calls-final-price">
            <div className="personal-calls-final-content">
              <div className="personal-calls-final-pricing">
                <span className="personal-calls-price-label">PRICE:</span>
                <div className="personal-calls-price-container">
                  <span className="personal-calls-crossed-price">
                    {price}/-
                  </span>
                  <span className="personal-calls-final-green">
                    {finalPrice}/-
                  </span>
                </div>
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

export default PersonalCallsSection2;
