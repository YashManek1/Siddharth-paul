import React, { useEffect, useState } from "react";
import { fetchCourseData } from "../api/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Funnel Flow/HeroSection";
import Stats from "../components/Funnel Flow/Stats";
import Details from "../components/Funnel Flow/Details";
import ObjectiveSection from "../components/Funnel Flow/ObjectiveSection";
import AccessSection from "../components/Funnel Flow/AccessSection";
import WhoThisIsForSection from "../components/Funnel Flow/WhoIsThisFor";
import FAQSection from "../components/Funnel Flow/FAQSection";
import GlobalMagnetCheckout from "../components/Funnel Flow/CheckOut";

const FunnelFlow = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseData("Funnel Flow").then(setCourse);
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
      <FAQSection />
      <GlobalMagnetCheckout
        price={course.price}
        finalPrice={course.finalPrice}
        addons={course.addons}
      />
      <Footer />
    </div>
  );
};

export default FunnelFlow;
