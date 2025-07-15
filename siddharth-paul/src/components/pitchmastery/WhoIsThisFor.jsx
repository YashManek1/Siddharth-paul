import React from 'react';
import '../Component_Styles/WhoThisIsForSection.css';

const WhoThisIsForSection = () => {
  return (
    <section className="who-this-is-for-main-section">
      <div className="who-this-is-for-container">
        <div className="who-this-is-for-content">
          <div className="who-this-is-for-left">
            <h2 className="who-this-is-for-title">
              WHO THIS IS FOR:
              <span className="who-this-is-for-underline-green"></span>
            </h2>
            
            <div className="who-this-is-for-list">
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Real Action-Takers</h3>
                  <p className="who-this-is-for-item-desc">
                    You're ready to actually pick up the phone (or Zoom) and talk — not just watch videos and feel good.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Reps Who Want to be Closers</h3>
                  <p className="who-this-is-for-item-desc">
                    You don't just want more calls — you want to close calls that pay you well.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Chat Ninjas</h3>
                  <p className="who-this-is-for-item-desc">
                    You want to master what to say in DMs & WhatsApp so you book calls on autopilot.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">People Who Want to Hear "Yes"</h3>
                  <p className="who-this-is-for-item-desc">
                    You're done guessing how to handle objections — you want scripts that work.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon">✓</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Roleplay Believers</h3>
                  <p className="who-this-is-for-item-desc">
                    You know you can't just "wing it" — you want to practice so you never freeze up when money is on the table.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="who-this-is-for-divider"></div>
          
          <div className="who-this-is-for-right">
            <h2 className="who-this-is-for-title">
              WHO THIS IS NOT FOR:
              <span className="who-this-is-for-underline-orange"></span>
            </h2>
            
            <div className="who-this-is-for-list">
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Script Hoarders</h3>
                  <p className="who-this-is-for-item-desc">
                    People who download 100 scripts but never use a single one on a real call.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Excuse Makers</h3>
                  <p className="who-this-is-for-item-desc">
                    "I'm bad at sales" — but they never do anything about it. This isn't magic.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">"I'll Think About It" People</h3>
                  <p className="who-this-is-for-item-desc">
                    If you say "I'll think about it" more than your leads do — this isn't for you.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">The Price Shoppers</h3>
                  <p className="who-this-is-for-item-desc">
                    If you're just looking for a cheap trick instead of a real skill — keep scrolling.
                  </p>
                </div>
              </div>
              
              <div className="who-this-is-for-item">
                <div className="who-this-is-for-icon-cross">✗</div>
                <div className="who-this-is-for-text">
                  <h3 className="who-this-is-for-item-title">Ghosters</h3>
                  <p className="who-this-is-for-item-desc">
                    People who get a DM reply... then do nothing. If you don't follow up — this won't save you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="who-this-is-for-access-button">
          ACCESS NOW!
        </button>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;