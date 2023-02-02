import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout