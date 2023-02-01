import React from 'react'
import BottomHome from './BottomHome'
import Navbar from './Navbar'
import Landing from './Landing'
import LandingFooter from './LandingFooter'
import Modal from './Modal'

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <LandingFooter />
      <BottomHome />
      {/* <Modal /> */}
    </>
  )
}

export default Home