import React, { useState, useEffect } from "react";
import style from "./SideBarMobile.module.scss";
import { IoListOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import icon from "../../../Assets/Group 27848.svg";
import MobileMenu from "./MobileMenu";

function SideBarMobile() {
  const [open, setOpen] = useState(false);
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
  return (
    <div className={style.Container} data-dropdown-SideBar>
      <div className={style.BarMobile}>
        <NavLink to={"."}>
          <img src={icon} alt="logo" />
        </NavLink>
        <div className={style.icon} onClick={() => setOpen(!open)}>
          <IoListOutline />
        </div>
      </div>
      <MobileMenu open={open} />
    </div>
  );
}

export default SideBarMobile;
