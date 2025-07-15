import React from 'react';
import '../Component_Styles/Details.css';

const Details = () => {
  const problemsData = [
    {
      title: "No Clear Journey",
      description: "Your funnel doesn't guide leads step-by-step to buy."
    },
    {
      title: "No Split-Test",
      description: "You never test variations — so what works stays hidden."
    },
    {
      title: "Weak Hook",
      description: "Your funnel headline fails to grab attention instantly."
    },
    {
      title: "Poor Analytics",
      description: "You have no real numbers, so you can't fix drop-offs."
    },
    {
      title: "Missing Stages",
      description: "You skip TOFU/MOFU/BOFU — so buyers drop off."
    },
    {
      title: "Weak Follow-Up",
      description: "You don't have automated emails or retargeting in place."
    },
    {
      title: "Zero Psychology",
      description: "You don't use human triggers to move buyers forward."
    },
    {
      title: "No Proof",
      description: "Your funnel lacks testimonials or real case studies."
    },
    {
      title: "Leaky Steps",
      description: "Pages don't convert — no clear CTA, confusing copy."
    },
    {
      title: "Tech Mess",
      description: "Your funnel tools break or don't connect properly."
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