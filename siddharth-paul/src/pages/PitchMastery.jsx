import React, { useEffect, useState } from "react";
import { fetchCourseData } from "../api/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/pitchmastery/HeroSection";
import Details from "../components/pitchmastery/Details";
import ObjectiveSection from "../components/pitchmastery/ObjectiveSection";
import AccessSection from "../components/pitchmastery/AccessSection";
import WhoThisIsForSection from "../components/pitchmastery/WhoIsThisFor";

import GlobalMagnetCheckout from "../components/pitchmastery/CheckOut";
import Stats from "../components/pitchmastery/Stats";
import FAQSection from "../components/Funnel Flow/FAQSection";

const PitchMastery = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseData("Pitch Mastery").then(setCourse);
  }, []);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <HeroSection />
      <Stats />
      <Details />
      <ObjectiveSection />
      <AccessSection
        price={course.price}
        finalPrice={course.finalPrice}
        addons={course.addons}
      />
      <WhoThisIsForSection />
      <FAQSection/>
      <GlobalMagnetCheckout
        price={course.price}
        finalPrice={course.finalPrice}
        addons={course.addons}
      />
      <Footer />
    </div>
  );
};

export default PitchMastery;
