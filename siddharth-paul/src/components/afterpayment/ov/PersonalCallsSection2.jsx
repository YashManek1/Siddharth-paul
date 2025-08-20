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
          "https://siddharth-paul.onrender.com/courses/Offer Vault"
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

  // Calculate price and finalPrice from API values (afterPaymentPrice & afterPaymentDiscount)
  const apiPrice = Number(courseData?.afterPaymentPrice ?? 1499);
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
    navigate("/finalthank-you");
  };

  return (
    <section className="personal-calls-main-section">
      <div className="personal-calls-main-container">
        <h2 className="personal-calls-main-title">
          WHAT YOU WILL GET ACCESS TO:
        </h2>

        <div className="personal-calls-grid-container">
          <div className="personal-calls-card personal-calls-card-calls">
            <h3 className="personal-calls-card-title">LIVE PITCH BREAKDOWN</h3>
            <p className="personal-calls-card-description">
              Join 1:1 coaching call with Siddharth where you'll get your exact
              pitch reviewed, line by line. Get real feedback on your offer,
              messaging, and delivery so you know exactly what to fix to make
              clients say "YES"
            </p>
            <div className="personal-calls-card-image personal-calls-card-image-large">
              <img src={img1} alt="Personal call with Siddharth" />
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-growth">
            <h3 className="personal-calls-card-title">
              FIX WEAK SPOTS INSTANTLY
            </h3>
            <p className="personal-calls-card-description">
              No more wondering why prospects hesitate or ghost you. I'll
              pinpoint exactly what's holding your pitch back — and show you how
              to remove objections, add trust boosters, and close deals faster
              than ever.
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
              WALK AWAY WITH A PROVEN OFFER
            </h3>
            <p className="personal-calls-card-description">
              This isn't just theory — you'll leave with a ready-to-go,
              high-ticket pitch that's been tested, improved, and tailored to
              your service. Handle calls confidently, skip the trial-and-error,
              and close your first $1,000-$5,000 client side by side with me.
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
