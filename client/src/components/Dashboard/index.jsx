import React from 'react'
import AccountPreview from './AccountPreview'
import AsideCards from './AsideCards'
import Header from './Header'
import styles from './index.module.css'
import SectionActivity from './SectionActivity'
function Dashboard() {
  return (
    <div>
      <Header />
      <AccountPreview />
      <SectionActivity />
      <AsideCards />
    </div>
  )
}

export default Dashboard