import React from 'react'
import BottomHome from './BottomHome'
import Navbar from './Navbar'
import Landing from './Landing'
import LandingFooter from './LandingFooter'

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <LandingFooter />
      <BottomHome />
    </>
  )
}

export default Home