import React from 'react'
import Hero from '../componets/Hero'
import SpecialtyFinder from '../componets/SpecialtyFinder'
import TopDoctors from '../componets/TopDoctors'
import AppointmentBanner from '../componets/AppointmentBanner'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SpecialtyFinder></SpecialtyFinder>
      <TopDoctors></TopDoctors>
      <AppointmentBanner></AppointmentBanner>
    </div>
  )
}

export default Home