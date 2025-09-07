import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FunnelFlow from "./pages/FunnelFlow";
import GlobalMagnet from "./pages/GlobalMagnet";
import OfferVault from "./pages/OfferVault";
import PitchMastery from "./pages/PitchMastery";
import RoasRocket from "./pages/RoasRocket";
import FunnelFlowUpsellCheckout from "./components/afterpayment/FunnelFlowUpsellCheckout";
import GlobalMagnetUpsellCheckout from "./components/afterpayment/GlobalMagnetUpsellCheckout";
import OfferVaultUpsellCheckout from "./components/afterpayment/OfferVaultUpsellCheckout";
import PitchMasteryUpsellCheckout from "./components/afterpayment/PitchMasteryUpsellCheckout";
import RoasRocketUpsellCheckout from "./components/afterpayment/RoasRocketUpsellCheckout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundPolicy from "./pages/RefundPolicy";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs"; // Import the new About Us page
import FinalThankYou from "./components/afterpayment/FinalThankYou";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funnel-flow" element={<FunnelFlow />} />
        <Route path="/global-magnet" element={<GlobalMagnet />} />
        <Route path="/offer-vault" element={<OfferVault />} />
        <Route path="/pitch-mastery" element={<PitchMastery />} />
        <Route path="/roas-rocket" element={<RoasRocket />} />
        <Route
          path="/funnel-flow-upsell"
          element={<FunnelFlowUpsellCheckout />}
        />
        <Route
          path="/global-magnet-upsell"
          element={<GlobalMagnetUpsellCheckout />}
        />
        <Route
          path="/offer-vault-upsell"
          element={<OfferVaultUpsellCheckout />}
        />
        <Route
          path="/pitch-mastery-upsell"
          element={<PitchMasteryUpsellCheckout />}
        />
        <Route
          path="/roas-rocket-upsell"
          element={<RoasRocketUpsellCheckout />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />{" "}
        {/* Add the new route */}
        <Route path="/thank-you" element={<FinalThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
