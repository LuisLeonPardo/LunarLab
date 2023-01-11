import React from 'react'
import Footer from '../Footer/Footer'
// import NavBarBottomHome from '../NavBarBottomHome'
import SectionCards from '../SectionCards'
import styles from './index.module.css'
function BottomHome() {
  return (
    <div className={styles.bottomHome}>
    {/* <NavBarBottomHome /> */}
    <SectionCards />
    {/* <Footer /> */}
    </div>
  )
}

export default BottomHome