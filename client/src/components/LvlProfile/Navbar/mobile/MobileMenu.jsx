import React, { useState, useEffect } from "react";
import style from "./SideBarMobile.module.scss";
import { IoListOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import icon from "../../../Assets/Group 27848.svg";
import Menu from "../Menu";
import CustomConnectButtom from "../../../WalletConnect/CustomConnectButtom";
import instagram from "../../../Assets/instagram.svg";
import twitter from "../../../Assets/twitter.svg";
import tiktok from "../../../Assets/tiktok.svg";
import linkedin from "../../../Assets/vector.svg";
import github from "../../../Assets/github.svg";

function MobileMenu({ open }) {
  return (
    <div className={style.Container} data-dropdown-SideBar>
      <div className={open ? style.OpenMenu : style.Menu}>
        <ul className={style.Buttons}>
          <li>
            <NavLink exact activeClassName="active-link" to="/dashboard">
              DASHBOARD
            </NavLink>
          </li>
          <span />
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              PROJECTS
            </NavLink>
          </li>
          <span />
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              STAKING
            </NavLink>
          </li>
          <span />
          <li>
            <NavLink exact activeClassName="active-link" to="#">
              BUY $AIR
            </NavLink>
          </li>
        </ul>
        <div className={style.ConnectButtom}>
          <CustomConnectButtom />
        </div>
        <div className={style.wrapper}>
          <ul>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={github} alt="github" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
            <li>
              <img src={tiktok} alt="tiktok" />
            </li>
          </ul>
          <p>© 2023 PD LunarLab.</p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
