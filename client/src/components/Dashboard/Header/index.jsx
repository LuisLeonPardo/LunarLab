import React from "react";
import styles from "./index.module.css";
import img from "../../Assets/headerimg.svg";
import CustomConnectButtom from "../../WalletConnect/CustomConnectButtom";
import style from "../../WalletConnect/CustomConnect.module.scss";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <h1 className={`${styles.header__h1}`}>LunarLab main page</h1>
      <p className={`${styles.header__p}`}>
        Connect wallet to Register or Login
      </p>
      <div className={`${styles.header__buttonConnect}`}>
        <CustomConnectButtom container={style.OpenContainer} />
      </div>
      <button className={`button ${styles.header__buttonHelp}`}>Help me</button>
      <img src={img} alt="autopilot on" className={`${styles.header__img}`} />
    </header>
  );
}

export default Header;
