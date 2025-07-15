import React from 'react';
import '../globalMagnet/Details.css';

const Details = () => {
  const problemsData = [
    {
      title: "Lack of positioning",
      description: "YOU sound like just another freelancer instead of a premium expert."
    },
    {
      title: "No clear niche",
      description: "YOU try to serve everyone, making it look generic and replaceable."
    },
    {
      title: "Weak personal brand",
      description: "Clients don't see YOU as an authority they can trust at higher price points."
    },
    {
      title: "Poor messaging",
      description: "YOUR offers don't communicate real value or outcomes that justify big investments."
    },
    {
      title: "No compelling proof",
      description: "YOU lack case studies, testimonials, or tangible results to build trust fast."
    },
    {
      title: "Low-confidence sales approach",
      description: "YOU sound desperate or unsure on calls, pushing clients away."
    },
    {
      title: "Relying on cheap platforms",
      description: "YOU depend on Upwork, Fiverr, or random job boards where price wars kill them."
    },
    {
      title: "Inconsistent outreach",
      description: "YOU have no predictable, systemized way to connect with ideal clients globally."
    },
    {
      title: "Underpricing mindset",
      description: "YOU believe you need to charge less to compete internationally, which devalues YOU."
    },
    {
      title: "No authority-building content",
      description: "YOU don't create content that positions YOU as a thought leader or global expert."
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