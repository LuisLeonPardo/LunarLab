import React, { useState, useEffect } from "react";
import style from "./SideBarMobile.module.scss";
import { IoListOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import icon from "../../../Assets/Group 27848.svg";
import Menu from "../Menu";

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
      <div className={open ? style.OpenMenu : style.Menu}>
        <ul className={style.Buttons}>
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              DASHBOARD
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              STAKING
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              BUY $AIR
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarMobile;
