import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalMagnet from "./pages/GlobalMagnet";
import PitchMastery from "./pages/PitchMastery";
import RoasRocket from "./pages/RoasRocket";
import OfferVault from "./pages/OfferVault";
import FunnelFlow from "./pages/FunnelFlow";
import Header from "./components/Header";
import Maingm from "./components/afterpayment/gm/Maingm";
import Mainov from "./components/afterpayment/ov/Maingov";
import Mainrr from "./components/afterpayment/rr/Mainrr";
import Mainpm from "./components/afterpayment/pm/Mainpm";
import Mainff from "./components/afterpayment/ff/Mainff";
import Congrats from "./components/afterpayment/gm/congrats.jsx";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasCompletedForm, setHasCompletedForm] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const [userIdentifier, setUserIdentifier] = useState('');

  // Generate or get user identifier
  const generateUserIdentifier = () => {
    let identifier = localStorage.getItem('userIdentifier');
    if (!identifier) {
      // Generate a unique identifier based on browser fingerprint and timestamp
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2);
      const browserInfo = navigator.userAgent.substring(0, 50);
      identifier = `user_${timestamp}_${random}_${btoa(browserInfo).substring(0, 10)}`;
      localStorage.setItem('userIdentifier', identifier);
    }
    return identifier;
  };

  // Check if user has already submitted the form
  const checkFormStatus = async (identifier) => {
    try {
      const response = await fetch(`https://siddharth-paul.onrender.com/api/client-info/check/${identifier}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.hasSubmitted || false;
      } else if (response.status === 404) {
        // User not found, hasn't submitted
        return false;
      } else {
        console.error('Error checking form status:', response.status);
        // On error, show popup to be safe
        return false;
      }
    } catch (error) {
      console.error('Error checking form status:', error);
      // On error, show popup to be safe
      return false;
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      const identifier = generateUserIdentifier();
      setUserIdentifier(identifier);

      // Check if user has cancelled the popup before
      const popupCancelled = localStorage.getItem('popupCancelled');
      
      if (popupCancelled === 'true') {
        // User has cancelled before, don't show popup again
        setHasCompletedForm(true);
        setShowPopup(false);
        setIsCheckingStatus(false);
        return;
      }

      // Check with backend if user has already submitted
      const hasSubmitted = await checkFormStatus(identifier);
      
      if (hasSubmitted) {
        setHasCompletedForm(true);
        setShowPopup(false);
      } else {
        setHasCompletedForm(false);
        setShowPopup(true);
        document.body.classList.add('sp-popup-open');
      }
      
      setIsCheckingStatus(false);
    };

    initializeApp();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setHasCompletedForm(true);
    // Allow body scrolling again
    document.body.classList.remove('sp-popup-open');
  };

  // Show loading screen while checking status
  if (isCheckingStatus) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #4a4a4a 0%, #2d1b69 50%, #8b2b8b 100%)',
        color: 'white',
        fontSize: '18px'
      }}>
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            Loading...
          </div>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderTop: '3px solid #ff00ff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  return (
    <div className="App" style={{ position: "relative" }}>
      {/* Only render the main app content if form is completed */}
      {hasCompletedForm && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/global-magnet" element={<GlobalMagnet/>} />
            <Route path="/pitch-mastery" element={<PitchMastery/>} />
            <Route path="/roas-rocket" element={<RoasRocket/>} />
            <Route path="/offer-vault" element={<OfferVault/>} />
            <Route path="/funnel-flow" element={<FunnelFlow/>} />
            <Route path="/afterpaymentgm" element={<Maingm />} />
            <Route path="/afterpaymentov" element={<Mainov />} />
            <Route path="/afterpaymentrr" element={<Mainrr />} />
            <Route path="/afterpaymentpm" element={<Mainpm />} />
            <Route path="/afterpaymentff" element={<Mainff />} />
            <Route path="/congrats" element={<Congrats/>} />
          </Routes>
        </Router>
      )}
      
      {/* Always render popup if it should be shown */}
      <Popup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
        userIdentifier={userIdentifier}
      />
    </div>
  );
}

export default App;