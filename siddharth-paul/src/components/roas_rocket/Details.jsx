import React from 'react';
import '../Component_Styles/Details.css';

const Details = () => {
  const problemsData = [
    {
      title: "Weak Ad Triggers",
      description: "YOU rely on generic hooks that don't stop the scroll or spark emotion."
    },
    {
      title: "No Scaling Blueprint",
      description: "YOU get stuck when an ad works — no plan to scale profitably without burning money."
    },
    {
      title: "Boring Visual Style",
      description: "YOUR ads look plain — no scroll-stopping editing, no pattern breaks."
    },
    {
      title: "Guessing Metrics",
      description: "YOU don't know what numbers actually matter, so you can't optimize ROI."
    },
    {
      title: "No Compelling Script",
      description: "YOU wing it without using proven copy frameworks that actually sell."
    },
    {
      title: "Ignoring Buyer Psychology",
      description: "YOU focus only on features, not the emotional triggers that make people buy."
    },
    {
      title: "Confused Offer Angle",
      description: "YOUR ads don't connect clearly to a strong, irresistible offer."
    },
    {
      title: "No Proven Frameworks",
      description: "YOU don't have ready-made checklists, templates, or examples to follow."
    },
    {
      title: "Lack of Testing Process",
      description: "YOU run random ads with no system to test and find true winners."
    },
    {
      title: "One-Off Campaign Mindset",
      description: "YOU treat every ad like a shot in the dark instead of building a system that prints cash on repeat."
    }
  ];

  return (
    <section className="details-section">
      <div className="details-container">
        <h2 className="details-title">
          THE <span className="highlight">REAL REASON</span> YOU'RE STRUGGLING TO<br />
          <span className="highlight">HIT CONSISTENT 10X ROAS:</span>
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