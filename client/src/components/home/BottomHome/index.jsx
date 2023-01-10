import React from 'react'
import Footer from '../Footer/Footer'
import NavBarBottomHome from '../NavBarBottomHome'
import SectionCards from '../SectionCards/SectionCards'
import styles from './index.module.css'
function BottomHome() {
  return (
    <div className={styles.bottomHome}>
    {/* <div>BottomHome</div> */}
    <NavBarBottomHome />
    {/* <SectionCards /> */}
    {/* <Footer /> */}
    </div>
  )
}

export default BottomHome