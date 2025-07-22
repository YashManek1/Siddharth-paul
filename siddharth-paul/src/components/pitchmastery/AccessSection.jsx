import React from "react";
import "../Component_Styles/AccessSection.css";
import img1 from "../../assets/accessimg1.svg";
import img2 from "../../assets/accessimg2.svg";
import img3 from "../../assets/accessimg3.svg";

const parseAddons = (addons) => {
  if (!addons) return [];
  // Split by numbered list or newlines, clean up
  return addons
    .split(/\d+\.\s|\\n|\n/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};

const AccessSection = ({ price, finalPrice, addons }) => {
  const scrollToCheckout = (e) => {
    e.preventDefault();
    const checkoutSection = document.querySelector(".global-magnet-checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addonList = parseAddons(addons);

  return (
    <section className="access-main-section">
      <div className="access-main-container">
        <h2 className="access-main-title">WHAT YOU WILL GET ACCESS TO:</h2>

        <div className="access-grid-container">
          <div className="access-card access-card-video">
            <h3 className="access-card-title">PROVEN VIDEO MODULES</h3>
            <p className="access-card-description">
              You get my full library of clear, step-by-step training. See
              exactly how to open, handle, and close real sales calls — plus
              live chat breakdowns.
              <br />
              Watch how I do it, then copy.
              <br />
              Easy dashboard and lifetime access.
            </p>
            <div className="access-card-image">
              <img src={img1} alt="Video modules dashboard" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">2999/-</span>
            </div>
          </div>

          <div className="access-card access-card-pdf">
            <h3 className="access-card-title">PDF PLAYBOOK</h3>
            <p className="access-card-description">
              Get my plug-and-play sales frameworks. Scripts for cold calls,
              warm follow-ups, and DMs.
            </p>
            <div className="access-card-image">
              <img src={img2} alt="PDF playbook guide" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">999/-</span>
            </div>
          </div>

          <div className="access-card access-card-checklist">
            <h3 className="access-card-title">CHECKLISTS</h3>
            <p className="access-card-description">
              Quick cheat sheets you can print and use before every call.
            </p>
            <div className="access-card-image checklist-icon">
              <div className="purple-tick-icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="40" fill="#9d00ff" />
                  <path
                    d="M26 40l12 12 16-20"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">499/-</span>
            </div>
          </div>

          <div className="access-card access-card-community">
            <h3 className="access-card-title">EXCLUSIVE COMMUNITY</h3>
            <p className="access-card-description">
              Join real closers inside our private group. Share wins, get
              feedback, and practice your pitch live. Stay accountable, stay
              sharp, and get extra tips you'll never get alone.
            </p>
            <div className="access-card-image">
              <img src={img3} alt="Community members" />
            </div>
            <div className="access-card-price">
              <span className="access-price-label">PRICE:</span>
              <span className="access-price-value">1499/-</span>
            </div>
          </div>

          <div className="access-final-price">
            <div className="access-final-content">
              <div className="access-final-pricing">
                <div className="access-final-regular">
                  <span className="access-final-label">PRICE:</span>
                  <span className="access-final-crossed">{price}/-</span>
                </div>
                <div className="access-final-offer">
                  <span className="access-final-label-big">FINAL PRICE:</span>
                  <span className="access-final-green">{finalPrice}/-</span>
                </div>
              </div>
              <button
                className="access-final-button"
                onClick={scrollToCheckout}
              >
                ACCESS NOW!
              </button>
              {addonList.length > 0 && (
                <div className="access-addons-list">
                  <h4 style={{ marginTop: 24, marginBottom: 8 }}>
                    Add-ons Included:
                  </h4>
                  <ul>
                    {addonList.map((addon, idx) => (
                      <li key={idx}>{addon}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
