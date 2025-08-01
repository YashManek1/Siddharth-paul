import React, { useEffect, useState } from "react";
import { fetchCourseData } from "../api/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/globalMagnet/HeroSection";
import Stats from "../components/globalMagnet/Stats";
import Details from "../components/globalMagnet/Details";
import ObjectiveSection from "../components/globalMagnet/ObjectiveSection";
import AccessSection from "../components/globalMagnet/AccessSection";
import WhoThisIsForSection from "../components/globalMagnet/WhoIsThisFor";

import GlobalMagnetCheckout from "../components/globalMagnet/CheckOut";
import FAQSection from "../components/Funnel Flow/FAQSection";

const GlobalMagnet = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseData("Global-Magnet").then(setCourse);
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

export default GlobalMagnet;
