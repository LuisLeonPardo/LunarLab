import React from 'react'
import BottomHome from './BottomHome'
import Landing from './Landing'
import LandingFooter from './LandingFooter'
import Modal from './Modal'
function Home() {
  return (
    <div >
      <Landing />
      <LandingFooter />
      <BottomHome />
    </div>
  )
}

export default Home