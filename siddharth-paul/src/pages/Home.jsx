import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LetterSection from "../components/LetterSection";
import ProgramsGrid from "../components/ProgramsGrid";
import "../components/Hero.css";
import "../components/LetterSection.css";
import "../components/accomplishments";
import AccomplishmentSection from "../components/accomplishments";

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
    </div>
  );
};

export default Home;
