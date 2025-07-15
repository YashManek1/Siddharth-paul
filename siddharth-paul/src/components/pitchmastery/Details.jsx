import React from 'react';
import './Details.css';

const Details = () => {
  const problemsData = [
    {
      title: "No Call Structure",
      description: "YOU jump on call with no clear plan on proven flow"
    },
    {
      title: "Zero Follow-Up",
      description: "YOU never follow up the right way, so leads disappear "
    },
    {
      title: "Weak Opening",
      description: "YOU don't know how to break the ice and make people trust you fast"
    },
    {
      title: "No Chat Framework",
      description: "YOU don't know what to say in DMs or Whatsapp to book the call."
    },
    {
      title: "Talking Too Much",
      description: "YOU talk too much about features, not about what they really want ."
    },
    {
      title: "Flat Tonality",
      description: "YOUR tone is boring- people don't feel exicted to work with you."
    },
    {
      title: "No Good Questions",
      description: "YOU don't ask the right questions to find real buying signals."
    },
    {
      title: "No proof or Stories",
      description: "YOU don;t share real exmaple or wins that make people say yes"
    },
    {
      title: "Poor objection Handling",
      description: "YOU freeze up when they say {I need to think about it}."
    },
    {
      title: "No Practice or Roleplay",
      description: "YOU never practice with anyone, so you don't know how to handle real calls."
    }
  ];

  return (
    <section className="details-section">
      <div className="details-container">
        <h2 className="details-title">
          THE <span className="highlight">REAL REASON</span> YOU'RE STRUGGLING TO CLOSE<br />
          <span className="highlight">HIGH-PAYING INTERNATIONAL CLIENTS:</span>
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