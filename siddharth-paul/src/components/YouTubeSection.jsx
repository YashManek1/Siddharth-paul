import React from "react";
import "./YouTubeSection.css";

const YouTubeSection = () => {
  const scrollToPrograms = (e) => {
    e.preventDefault();
    const programsSection = document.querySelector('.programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="youtube-section">
      <div className="youtube-header">
        <h2 className="youtube-title">TOP FREE</h2>
        <h3 className="youtube-subtitle">VIDEO TRAININGS FROM SIDDHARTH</h3>
        <div className="youtube-divider"></div>
      </div>
      
      <div className="youtube-content">
        <div className="youtube-embed-container">
          <div className="youtube-placeholder">
            {/* <div className="youtube-embed-text">
              <p>CONNECT MY INSTA OR MAKE A SCROLLABLE FEATURE WHERE ALL MY INSTA POST AND YOUTUBE VIDEOS ARE THERE</p>
            </div> */}
            
            {/* YouTube Profile Embed - Try multiple methods */}
            <div className="youtube-profile-embed">
              {/* Method 1: Channel's uploads playlist */}
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU6Z5X_C2dLCBnaQENCPyHuA"
                title="Siddharth Paul YouTube Channel"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              
              {/* Alternative Method 2: If above doesn't work, try embedding a specific video */}
              {/* 
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="Siddharth Paul Latest Video"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              */}
              
              {/* Alternative Method 3: Link to channel instead of embed */}
              {/* 
              <div className="youtube-channel-link">
                <a 
                  href="https://www.youtube.com/channel/UC6Z5X_C2dLCBnaQENCPyHuA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="channel-visit-btn"
                >
                  Visit YouTube Channel
                </a>
              </div>
              */}
            </div>
            
            <a href="#" className="youtube-access-btn" onClick={scrollToPrograms}>
              ACCESS NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
