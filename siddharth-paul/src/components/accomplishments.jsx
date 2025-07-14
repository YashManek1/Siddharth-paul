import React from "react";
import "./accomplishments.css";
import accomplishment1 from "../assets/accomplishment1.svg";
import accomplishment2 from "../assets/accomplishment2.svg";
import accomplishment3 from "../assets/accomplishment3.svg";
import accomplishment4 from "../assets/accomplishment4.svg";
import accomplishment6 from "../assets/accomplishment6.svg";

const AccomplishmentSection = () => {
  return (
    <>
      {/* Top visuals section: purple to white gradient */}
      <section className="accomplishment-section visuals">
        <h2 className="accomplishment-title">ACCOMPLISHMENTS</h2>
        <div className="accomplishment-grid">
          <div className="accomplishment-row-top">
            <img
              src={accomplishment1}
              alt="Accomplishment 1"
              className="accomplishment-img-top"
            />
          </div>
          <div className="accomplishment-row-bottom">
            <img
              src={accomplishment2}
              alt="Accomplishment 2"
              className="accomplishment-img-bottom-left"
            />
            <div className="accomplishment-bottom-right">
              <img
                src={accomplishment3}
                alt="Accomplishment 3"
                className="accomplishment-img-bottom-right-top"
              />
              <img
                src={accomplishment4}
                alt="Accomplishment 4"
                className="accomplishment-img-bottom-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof section: white to purple gradient */}
      <section className="accomplishment-section proof">
        <div className="accomplishment-proof-text">
          <strong>
            I know a lot of gurus show random fake screenshots. That's why I've
            attached my actual bank statements and PayPal proofs from April.
            I'll share even more inside the courses — but not all here, as too
            much proof starts looking fake 😂. This is more than enough to trust
            my products. And if you ever feel I under-deliver, you can reach out
            on Insta or use my 7-day no-questions-asked refund policy.
          </strong>
        </div>
        <div className="accomplishment-continuation-grid">
          <div className="accomplishment-continuation-left">
            <div className="accomplishment-video-box">
              <video
                src="your-bank-proof-video.mp4"
                controls
                className="accomplishment-proof-video"
                poster=""
              />
              <a href="#" className="accomplishment-access-btn">
                ACCESS NOW!
              </a>
            </div>
          </div>
          <div className="accomplishment-continuation-right">
            <img
              src={accomplishment6}
              alt="PayPal Transactions Proof"
              className="accomplishment-img-proof"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AccomplishmentSection;
