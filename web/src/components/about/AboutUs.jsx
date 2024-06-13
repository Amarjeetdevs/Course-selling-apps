import React from 'react'
import AboutHero from './AboutHero'
import AboutSubHero from './AboutSubHero'
import ProgressBarsRow from './AboutDigit'
import AboutPrice from './AboutPrice'
import Footer from '../Footer'
import Navigation from '../Navigation'

export default function AboutUs() {
  return (
    <>
    <Navigation/>
    <AboutHero/>
   <AboutSubHero/>
   <ProgressBarsRow/>
   <AboutPrice/>
   <Footer/>
    </>
  )
}
