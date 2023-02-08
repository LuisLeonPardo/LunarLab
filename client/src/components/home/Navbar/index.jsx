import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

import LunarLab from "../../Assets/Group 27848.svg";
import CustomConnectButtom from "../../WalletConnect/CustomConnectButtom";
import style from "../../WalletConnect/CustomConnect.module.scss";
import { IoListOutline } from "react-icons/io5";
import MobileMenu from "../../LvlProfile/Navbar/mobile/MobileMenu";

function Navbar() {
  const location = useLocation();
  const [homeLinkClass, setHomeLinkClass] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 575) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home") {
      setHomeLinkClass("active-link-home");
    } else {
      setHomeLinkClass("active-link-home-no");
    }

    // if (location.pathname === '/contacts') {
    //     setHomeLinkClass('active-link-contacts');
    // } else {
    //     setHomeLinkClass('active-link-contacts-no');
    // }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isSideBar = e.target.matches("[data-dropdown-sidebar]");
      if (!isSideBar && e.target.closest("[data-dropdown-sidebar]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (!isSideBar) {
        setOpen(false);
      }
    });
  }, []);

  const buttons = [
    { name: "Home", link: "/" },
    { name: "Whitepaper", link: "/whitepaper" },
    { name: "Contacts", link: "/contacts" },
    { name: "FAQ", link: "/faqs" },
  ];

  return (
    <div className="contenedor-navBar">
      <div className="container" data-dropdown-sidebar>
        {/* <div className='pixeles'>Pixeles</div> */}
        <div className="navBar">
          <div className="container-img-btn">
            <div className="navBar-iconoLunarLab">
              <img src={LunarLab} alt="LunarLab" />
            </div>
            <div className="icon" onClick={() => setOpen(!open)}>
              <IoListOutline />
            </div>
          </div>

          <div className="navBar-iconosNavBar">
            <div className="navBarLinks">
              <Link to="/home" className={`nav-link ${homeLinkClass}`}>
                Home
              </Link>
              <Link id="navBar-btn-whitepaper" to="" className="nav-link">
                Whitepaper
              </Link>
              <Link
                id="navBar-btn-contacts"
                to="/contacts"
                className="nav-link"
              >
                Contacts
              </Link>
              <Link id="navBar-btn-faq" to="" className="nav-link">
                FAQ
              </Link>
            </div>
            <div className="connectButtom">
              <CustomConnectButtom container={style.OpenContainer} />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={open} buttons={buttons} />
    </div>
  );
}

export default Navbar;
