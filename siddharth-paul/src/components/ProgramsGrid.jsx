import React from 'react';
import './ProgramsGrid.css';

// Import the 5 box images
import landingPageSecrets from '../assets/landing-page-secrets.svg';
import getInternationalClients from '../assets/get-international-clients.svg';
import pitchMastery from '../assets/pitch-mastery.svg';
import createIrresistibleOffers from '../assets/create-irresistible-offers.svg';
import get10xRoasConsistently from '../assets/get-iox-roas-consistently.svg';

const boxData = [
  {
    title: <>LANDING<br />PAGE<br />SECRETS</>,
    img: landingPageSecrets,
    link: '/global-magnet',
  },
  {
    title: <>GET<br />INTERNATIONAL<br />CLIENTS</>,
    img: getInternationalClients,
    link: '/funnel-flow',
  },
  {
    title: <>PITCH<br />MASTERY</>,
    img: pitchMastery,
    link: '/pitch-mastery',
  },
  {
    title: <>CREATE<br />IRRESISTIBLE<br />OFFERS</>,
    img: createIrresistibleOffers,
    link: '/offer-vault',
  },
  {
    title: <>GET<br />10X ROAS<br />CONSISTENTLY</>,
    img: get10xRoasConsistently,
    link: '/roas-rocket',
  },
];

const ProgramsGrid = () => (
  <section className="programs-section">
    <div className="programs-boxes-wrapper">
      <div className="programs-boxes-row">
        {boxData.slice(0,3).map((box, idx) => (
          <div className="programs-box" key={idx}>
            <div className="programs-box-image">
              <img src={box.img} alt="" />
              {/* <div className="programs-box-title">{box.title}</div> */}
            </div>
            <a className="get-started-btn" href={box.link}>GET STARTED!</a>
          </div>
        ))}
      </div>
      <div className="programs-boxes-row">
        {boxData.slice(3).map((box, idx) => (
          <div className="programs-box" key={idx+3}>
            <div className="programs-box-image">
              <img src={box.img} alt="" />
              {/* <div className="programs-box-title">{box.title}</div> */}
            </div>
            <a className="get-started-btn" href={box.link}>GET STARTED!</a>
          </div>
        ))}
      </div>
    </div>
    {/* Decorative elements like wave/rocket can be placed here if needed */}
  </section>
);

export default ProgramsGrid;