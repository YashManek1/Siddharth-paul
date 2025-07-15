import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-text">MADE OVER 8+ CRORES</span>
        </div>
        <div className="stat-item">
          <span className="stat-text">155+ CLIENTS CLOSED</span>
        </div>
        <div className="stat-item">
          <span className="stat-text">5+ YRS EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;