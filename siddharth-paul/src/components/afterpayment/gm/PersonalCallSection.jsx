import React from "react";
import "./PersonalCallSection.css";
import img1 from "../../../assets/personalcall.svg"
import img2 from "../../../assets/growth.svg"
import img3 from "../../../assets/client.svg"

const PersonalCallsSection = ({ price = "4999", finalPrice = "4999" }) => {
  const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector(".global-magnet-checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="personal-calls-main-section">
      <div className="personal-calls-main-container">
        <h2 className="personal-calls-main-title">WHAT YOU WILL GET ACCESS TO:</h2>

        <div className="personal-calls-grid-container">
          <div className="personal-calls-card personal-calls-card-calls">
            <h3 className="personal-calls-card-title">4 PERSONAL CALLS [1-1]</h3>
            <p className="personal-calls-card-description">
              Join WEEKLY coaching calls with SIDDHARTH and ask your questions directly to him to get advice straight from SIDDHARTH himself on how to deal with the specific challenges you're facing.
            </p>
            <div className="personal-calls-card-image personal-calls-card-image-large">
              <img src={img1} alt="Personal call with Siddharth" />
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-growth">
            <h3 className="personal-calls-card-title">GROW 1000% FASTER</h3>
            <p className="personal-calls-card-description">
              With my guidance, you can land your first high-ticket client up to 10 times faster — if you execute. I've done this thousands of times, and my proven roadmap will save you hundreds of hours and costly mistakes.
            </p>
            <div className="personal-calls-card-image">
              <img src={img2} alt="Growth chart showing 100X improvement" />
              <div className="growth-overlay">
                <span className="growth-percentage">100X</span>
              </div>
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-close">
            <h3 className="personal-calls-card-title">CLOSE YOUR FIRST CLIENT WITH ME</h3>
            <p className="personal-calls-card-description">
              Get step-by-step personal guidance to land your first $1,000-$5,000 client fast. Skip the guesswork, handle objections with confidence, and start closing like a pro — side by side with me.
            </p>
            <div className="personal-calls-card-image">
              <img src={img3} alt="Closing deals with clients" />
            </div>
          </div>

          <div className="personal-calls-final-price">
            <div className="personal-calls-final-content">
              <div className="personal-calls-final-pricing">
                <span className="personal-calls-price-label">PRICE:</span>
                <span className="personal-calls-final-green">{finalPrice}/-</span>
              </div>
              <button
                className="personal-calls-final-button"
                onClick={scrollToCheckout}
              >
                ACCESS NOW!
              </button>
              <p className="personal-calls-disclaimer">
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