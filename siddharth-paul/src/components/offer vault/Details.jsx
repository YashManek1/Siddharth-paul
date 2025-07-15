import React from 'react';
import './Details.css';

const Details = () => {
  const problemsData = [
    {
      title: "Weak Offer Structure",
      description: "YOU build offers that feel basic or generic instead of irresistible, premium packages."
    },
    {
      title: "Generic Headlines",
      description: "YOU use weak, templated headlines that don't grab attention or differentiate you from competitors."
    },
    {
      title: "No Clear Value Stack",
      description: "YOU don't show exactly why your offer is worth $1,000–$5,000+, so clients see it as a cost — not an investment."
    },
    {
      title: "Poor Bonus Strategy",
      description: "YOU don't use attractive bonuses to increase perceived value and tip prospects over the edge."
    },
    {
      title: "Low Urgency & Scarcity",
      description: "YOU don't create the fear of missing out or time pressure, so prospects delay or ghost you."
    },
    {
      title: "Underestimating Psychology",
      description: "YOU focus on logic, ignoring the emotional triggers that actually make people buy."
    },
    {
      title: "Confusing Messaging",
      description: "YOUR pitch isn't clear, emotionally resonant, or benefit-focused, so prospects disconnect."
    },
    {
      title: "No Testing or Iteration",
      description: "YOU set an offer once and hope it works, instead of refining through real-world feedback and data."
    },
    {
      title: "No Proof Elements",
      description: "YOU lack guarantees, bonuses, or clear risk reversals that make the client feel safe saying \"yes\" immediately."
    },
    {
      title: "Not Leveraging AI Tools",
      description: "YOU miss out on using AI to quickly craft, analyze, and optimize your offer copy and pitch."
    }
  ];

  return (
    <section className="details-section">
      <div className="details-container">
        <h2 className="details-title">
          THE <span className="highlight">REAL REASON</span> YOU'RE STRUGGLING TO CLOSE<br />
          <span className="highlight">HIGH-TICKET DEALS:</span>
        </h2>
        
        <div className="problems-grid">
          {problemsData.map((problem, index) => (
            <div key={index} className="problem-item">
              <h3 className="problem-title">
                <span className="arrow">{">>> "}</span>
                {problem.title}
              </h3>
              <p className="problem-description">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;