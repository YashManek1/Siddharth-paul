import React, { useEffect, useState } from "react";
import { fetchCourseData } from "../api/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/roas_rocket/HeroSection";
import Stats from "../components/roas_rocket/Stats";
import Details from "../components/roas_rocket/Details";
import ObjectiveSection from "../components/roas_rocket/ObjectiveSection";
import AccessSection from "../components/roas_rocket/AccessSection";
import WhoThisIsForSection from "../components/roas_rocket/WhoIsThisFor";
import FAQSection from "../components/roas_rocket/FAQSection";
import GlobalMagnetCheckout from "../components/roas_rocket/CheckOut";

const RoasRocket = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseData("Roas Rocket").then(setCourse);
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

export default RoasRocket;
