import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';
import Congrats from './congrats';
import PersonalCallsSection from './PersonalCallSection';
import Discount from './Discount';
import PersonalCallsSection2 from './PersonalCallsSection2';
import ThankYou from './ThankYou';
import '../AfterPayment.css';

const Mainff = () => {
  return (
    <div className="afterpayment-page">
        <Header />
        <Congrats />
        <PersonalCallsSection />
        <Discount />
        <Congrats />
        <PersonalCallsSection2/>
        <ThankYou />
        <Footer />
    </div>
  )
}

export default Mainff;
