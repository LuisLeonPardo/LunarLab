import React, { useState } from "react";
import styles from "./index.module.css";
import img from "../../Assets/headerimg.svg";
import CustomConnectButtom from "../../WalletConnect/CustomConnectButtom";
import style from "../../WalletConnect/CustomConnect.module.scss";
import { SiBinance } from "react-icons/si";
import busd from "../../Assets/BUSD.png";
import { RiBook3Line } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { useAccount, useNetwork, useBalance } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
function Header() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const { openAccountModal } = useAccountModal();

  const { data } = useBalance({
    address: address,
  });

  const balanceBUSD = useBalance({
    address: address,
    token: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  });

  console.log(chain);

  const cutAddres =
    address?.slice(0, 4) +
    "..." +
    address?.slice(address?.length - 4, address?.length);

  return (
    <header className={`${styles.header}`}>
      {isConnected ? (
        <div className={styles.logged}>
          <SiBinance className={`${styles.currencyIcon} ${styles.binance}`} />
          <span className={`${styles.smart}`}>{chain.name}</span>
          <img
            src={busd}
            alt="BUSD"
            className={`${styles.currencyIcon} ${styles.busd}`}
          />
          <span>
            {balanceBUSD.data.formatted + " " + balanceBUSD.data.symbol}
          </span>
          <RxDividerVertical className={styles.vr} />
          <SiBinance
            className={`${styles.currencyIcon} ${styles.binanceGold}`}
          />
          <span className={`${styles.bnb}`}>
            {data.formatted + " " + data.symbol}
          </span>
          <RxDividerVertical className={styles.vr} />
          <RiBook3Line />
          <span className={`${styles.contract}`}>{cutAddres}</span>
          <button
            className={`${styles.logout}`}
            onClick={() => openAccountModal()}
          >
            <HiOutlineLogout className={styles.logoutIcon} />
          </button>
        </div>
      ) : null}
      <h1 className={`${styles.header__h1}`}>
        {isConnected ? "Register in LunarLab" : "LunarLab main page"}
      </h1>
      <p className={`${styles.header__p}`}>
        Connect wallet to Register or Login
      </p>
      {isConnected ? (
        <NavLink to={"/register"} className={`${styles.header__buttonConnect}`}>
          {" "}
          Join Forsage{" "}
        </NavLink>
      ) : (
        <CustomConnectButtom container={style.OpenContainer} grid={true} />
      )}
      <button className={`button ${styles.header__buttonHelp}`}>Help me</button>
      <img src={img} alt="autopilot on" className={`${styles.header__img}`} />
    </header>
  );
}

export default Header;
