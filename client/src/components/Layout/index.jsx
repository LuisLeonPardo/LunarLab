import React from 'react'
import styles from './index.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
function Layout({children}) {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout