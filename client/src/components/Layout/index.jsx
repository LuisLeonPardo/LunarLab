import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import NewNavbar from "../LvlProfile/Navbar";
import { useLocation } from "react-router-dom";
import SideBarMobile from "../LvlProfile/Navbar/mobile/SideBarMobile";
function Layout() {
  const location = useLocation();
  const screenWidth = window.innerWidth || document.body.clientWidth;
  return (
    <>
      {location.pathname === "/" ? (
        <Navbar />
      ) : screenWidth > 700 ? (
        <NewNavbar />
      ) : (
        <SideBarMobile />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
