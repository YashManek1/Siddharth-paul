import React from "react";
import "./PersonalCallSection.css";
import img1 from "../../../assets/personalcall.svg"
import img2 from "../../../assets/growth.svg"
import img3 from "../../../assets/client.svg"

const PersonalCallsSection2 = ({ price = "2999", finalPrice = "1499" }) => {
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
            <h3 className="personal-calls-card-title">1-1 CALL WITH SIDDHARTH</h3>
            <p className="personal-calls-card-description">
              Join private 1-1 calls with me where I help you fix your ads, step by step. I'll look at your hooks, scripts, editing, and budgets. Ask me anything.
            </p>
            <div className="personal-calls-card-image personal-calls-card-image-large">
              <img src={img1} alt="Personal call with Siddharth" />
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-growth">
            <h3 className="personal-calls-card-title">PERSONAL AD REVIEWS</h3>
            <p className="personal-calls-card-description">
              You'll get my eyes on your ads — I'll check each line, headline, video flow, and call to action. I'll show you what's weak, what to make stronger, and what to test next.
            </p>
            <div className="personal-calls-card-image">
              <img src={img2} alt="Growth chart showing improvement" />
              <div className="growth-overlay">
                <span className="growth-percentage">100X</span>
              </div>
            </div>
          </div>

          <div className="personal-calls-card personal-calls-card-close">
            <h3 className="personal-calls-card-title">DONE-FOR-YOU WINNING AD SCRIPTS</h3>
            <p className="personal-calls-card-description">
              I won't just give you a template — I'll write your ads for you. You'll tell me about your offer, and I'll craft hooks, angles, and full scripts that fit your style and audience. I'll help you fix every line so you know your ad is ready to win — all done with you.
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
                  <span className="personal-calls-crossed-price">{price}/-</span>
                  <span className="personal-calls-final-green">{finalPrice}/-</span>
                </div>
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

export default PersonalCallsSection2;