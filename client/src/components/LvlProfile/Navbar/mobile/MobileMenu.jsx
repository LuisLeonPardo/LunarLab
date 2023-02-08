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

function MobileMenu({ open, buttons }) {
  return (
    <div className={style.Container} data-dropdown-SideBar>
      <div className={open ? style.OpenMenu : style.Menu}>
        <ul className={style.Buttons}>
          {buttons.map((b) => (
            <div className={style.list}>
              <li>
                <NavLink exact activeClassName="active-link" to={b.link}>
                  {b.name}
                </NavLink>
              </li>
              <span />
            </div>
          ))}
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
