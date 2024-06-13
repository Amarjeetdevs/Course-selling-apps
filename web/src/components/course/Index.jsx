import React from 'react'
import Navigation from '../Navigation'
import CourseHero from './CourseHero'
import CourseSubHero from './CourseSubHero'
import ListCourse from './ListCourse'
import Footer from '../Footer'

export default function CoursePage() {
  return (
    <>
    <Navigation/>
    <CourseHero/>
    <CourseSubHero/>
    {/* <ListCourse/> */}
    <Footer/>
    </>
  )
}
