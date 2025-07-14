import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalMagnet from "./pages/GlobalMagnet";
import PitchMastery from "./pages/PitchMastery";
import RoasRocket from "./pages/RoasRocket";
import OfferVault from "./pages/OfferVault";
import FunnelFlow from "./pages/FunnelFlow";
import Header from "./components/Header";


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global-magnet" element={<GlobalMagnet/>} />
          <Route path="/pitch-mastery" element={<PitchMastery/>} />
          <Route path="/roas-rocket" element={<RoasRocket/>} />
          <Route path="/offer-vault" element={<OfferVault/>} />
          <Route path="/funnel-flow" element={<FunnelFlow/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;