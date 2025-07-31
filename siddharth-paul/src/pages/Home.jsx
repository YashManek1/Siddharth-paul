import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LetterSection from "../components/LetterSection";
import ProgramsGrid from "../components/ProgramsGrid";
import Footer from "../components/Footer";
import YouTubeSection from "../components/YouTubeSection";

import "../components/Hero.css";
import "../components/LetterSection.css";
import "../components/accomplishments";
import AccomplishmentSection from "../components/accomplishments";
import FAQSection from "../components/Funnel Flow/FAQSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* Place the gradient here, NOT inside <Hero /> */}
      <div className="hero-gradient-extend"></div>
      <ProgramsGrid />
      <LetterSection />
      <AccomplishmentSection />
      <YouTubeSection />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default Home;
