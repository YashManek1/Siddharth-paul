import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/roas_rocket/HeroSection'
import Stats from '../components/roas_rocket/Stats'
import Details from '../components/roas_rocket/Details'
import ObjectiveSection from '../components/roas_rocket/ObjectiveSection'
import AccessSection from '../components/roas_rocket/AccessSection'
import WhoThisIsForSection from '../components/roas_rocket/WhoIsThisFor'
import FAQSection from '../components/roas_rocket/FAQSection'
import GlobalMagnetCheckout from '../components/roas_rocket/CheckOut'


const RoasRocket = () => {
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

export default RoasRocket
