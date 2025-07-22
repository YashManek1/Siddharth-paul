import React, { useEffect, useState } from "react";
import { fetchCourseData } from "../api/courses";
import Header from "../components/Header";
import HeroSection from "../components/offer vault/HeroSection";
import Stats from "../components/offer vault/Stats";
import Details from "../components/offer vault/Details";
import ObjectiveSection from "../components/offer vault/ObjectiveSection";
import AccessSection from "../components/offer vault/AccessSection";
import WhoThisIsForSection from "../components/offer vault/WhoIsThisFor";
import FAQSection from "../components/offer vault/FAQSection";
import GlobalMagnetCheckout from "../components/offer vault/CheckOut";

const OfferVault = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseData("Offer Vault").then(setCourse);
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
    </div>
  );
};

export default OfferVault;
