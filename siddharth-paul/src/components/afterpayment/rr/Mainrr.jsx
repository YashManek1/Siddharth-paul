import React from 'react'
import Congrats from './congrats';
import PersonalCallsSection from './PersonalCallSection';
import Discount from './Discount';
import PersonalCallsSection2 from './PersonalCallsSection2';
import ThankYou from './ThankYou';

const Mainrr = () => {
  return (
    <div>
        <Congrats />
        <PersonalCallsSection />
        <Discount />
        <Congrats />
        <PersonalCallsSection2/>
        <ThankYou />
    </div>
  )
}

export default Mainrr;
