import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Funnel Flow/HeroSection'
import Stats from '../components/Funnel Flow/Stats';
import Details from '../components/Funnel Flow/Details';
import ObjectiveSection from '../components/Funnel Flow/ObjectiveSection';
import AccessSection from '../components/Funnel Flow/AccessSection';
import WhoThisIsForSection from '../components/Funnel Flow/WhoIsThisFor';
import FAQSection from '../components/Funnel Flow/FAQSection';
import GlobalMagnetCheckout from '../components/Funnel Flow/CheckOut';

const FunnelFlow = () => {
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

export default FunnelFlow