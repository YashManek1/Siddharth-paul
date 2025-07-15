import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/pitchmastery/HeroSection'
import Details from '../components/pitchmastery/Details'
import ObjectiveSection from '../components/pitchmastery/ObjectiveSection'
import AccessSection from '../components/pitchmastery/AccessSection'
import WhoThisIsForSection from '../components/pitchmastery/WhoIsThisFor'
import FAQSection from '../components/pitchmastery/FAQSection'
import GlobalMagnetCheckout from '../components/pitchmastery/CheckOut'
import Stats from '../components/pitchmastery/Stats'

const PitchMastery = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
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

export default PitchMastery
