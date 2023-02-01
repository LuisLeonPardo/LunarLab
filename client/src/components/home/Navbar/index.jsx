import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

import LunarLab from "../../Assets/Group 27848.svg";
import CustomConnectButtom from "../../WalletConnect/CustomConnectButtom";
import style from "../../WalletConnect/CustomConnect.module.scss";

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

  return (
    <div className="contenedor-navBar">
      <div className="container">
        {/* <div className='pixeles'>Pixeles</div> */}
        <div className="navBar">
          <div className="container-img-btn">
            <div className="navBar-iconoLunarLab">
              <img src={LunarLab} alt="LunarLab" />
            </div>
            <div>
              <button
                className={`menu-button ${isVisible ? "visible" : "hidden"}`}
              >
                <span>Menu</span>
              </button>
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
            <CustomConnectButtom container={style.OpenContainer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
