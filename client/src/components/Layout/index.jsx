import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import NewNavbar from '../LvlProfile/Navbar'
import { useLocation } from 'react-router-dom'
function Layout() {
  const location = useLocation()
  return (
    <>
    {location.pathname === '/' ? <Navbar /> : <NewNavbar /> }
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout