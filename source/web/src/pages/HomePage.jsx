import React, { Fragment } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SubHero from '../components/SubHero'
import IconTitle from '../components/IconTitle'
import TransSec from '../components/TransSec'
import OurClasses from '../components/OurClasses'
import NewLatter from '../components/NewLatter'

export default function HomePage() {
  return (
   <Fragment>
    <Navigation/>
    <Hero/>
    <SubHero/>
    <OurClasses/>
    <IconTitle/>
  
    <NewLatter/>
    <TransSec/>

    
  
    <Footer/>
   </Fragment>
  )
}
