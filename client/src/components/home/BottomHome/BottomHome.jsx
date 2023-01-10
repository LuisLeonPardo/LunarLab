import React from 'react'
import Footer from '../Footer/Footer'
import NavBarBottomHome from '../NavBarBottomHome/NavBarBottomHome'
import SectionCards from '../SectionCards/SectionCards'
import './BottomHome.css'
function BottomHome() {
  return (
    <div className='bottomHome'>
    <div>BottomHome</div>
    <NavBarBottomHome />
    <SectionCards />
    <Footer />
    </div>
  )
}

export default BottomHome