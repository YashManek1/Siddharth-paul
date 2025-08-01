import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Congrats from "./congrats";
import PersonalCallsSection from "./PersonalCallSection";
import Discount from "./Discount";
import PersonalCallsSection2 from "./PersonalCallsSection2";
import RoasRocketUpsellCheckout from "../RoasRocketUpsellCheckout";
import "../AfterPayment.css";

const Mainrr = () => {
  // Function to handle skip - go to ThankYou directly
  const handleSkipUpsell = () => {
    window.location.href = "/final-thankyou";
  };

  return (
    <div className="afterpayment-page">
      <Header />
      <Congrats />
      <PersonalCallsSection />
      <Discount />
      <Congrats />
      <PersonalCallsSection2 />

      {/* Add checkout component with id for scrollToCheckout to find */}
      <div id="upsell-checkout">
        <RoasRocketUpsellCheckout />
      </div>

      {/* Add skip option */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button
          onClick={handleSkipUpsell}
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            padding: "10px 20px",
            color: "#666",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Skip This Offer
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Mainrr;
