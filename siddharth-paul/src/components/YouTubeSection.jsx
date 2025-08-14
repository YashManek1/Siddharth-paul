import React from "react";
import "./YouTubeSection.css";

const YouTubeSection = () => {
  const scrollToPrograms = (e) => {
    e.preventDefault();
    const programsSection = document.querySelector(".programs-section");
    if (programsSection) programsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="youtube-section">
      <div className="youtube-header">
        <h2 className="youtube-title">TOP FREE</h2>
        <h3 className="youtube-subtitle">VIDEO TRAININGS FROM SIDDHARTH</h3>
        <div className="youtube-divider" />
      </div>

      <div className="youtube-content">
        {/* Add instagram-container to tune sizing specifically for IG */}
        <div className="youtube-embed-container instagram-container">
          <div className="youtube-placeholder">
            <div className="instagram-scroll">
              {/* Elfsight Instagram Feed widget */}
              <div
                className="elfsight-app-7219c7b9-9492-4343-ba9a-2a361c61c413"
                data-elfsight-app-lazy
              />
            </div>

            <a
              href="#"
              className="youtube-access-btn"
              onClick={scrollToPrograms}
            >
              ACCESS NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
