import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/globalMagnet/HeroSection'
import Stats from '../components/globalMagnet/Stats';
import Details from '../components/globalMagnet/Details';
import ObjectiveSection from '../components/globalMagnet/ObjectiveSection';
import AccessSection from '../components/globalMagnet/AccessSection';
import WhoThisIsForSection from '../components/globalMagnet/WhoIsThisFor';
import FAQSection from '../components/globalMagnet/FAQSection';
import GlobalMagnetCheckout from '../components/globalMagnet/CheckOut';

const GlobalMagnet = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Stats/>
      <Details/>
      <ObjectiveSection/>
      <AccessSection/>
      <WhoThisIsForSection/>
      <FAQSection/>
      <GlobalMagnetCheckout/>
    </div>
  )
}

export default GlobalMagnet