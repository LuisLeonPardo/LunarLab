import React from "react";
import style from "./RegisterDashboard.module.scss";
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoRadioButtonOffOutline,
} from "react-icons/io5";

import { AiFillInfoCircle } from "react-icons/ai";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useBalance,
} from "wagmi";

function RegisterDashboard() {
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork();

  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  const balance = useBalance({
    address: address,
    token: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  });

  console.log(balance.data?.formatted);

  var chainBool = false;
  chain?.id === 56 ? (chainBool = true) : (chainBool = false);
  console.log(chainBool);
  return (
    <div className={style.Container}>
      <div className={style.RegisterContainer}>
        <div className={style.Register}>
          <h1>Register in LunarLab</h1>
          <div className={style.Upline}>
            <p>Your upline</p>
            <input></input>
          </div>
          <div className={style.Checks}>
            {isConnected ? (
              <div className={style.Green}>
                <IoCheckmarkCircleOutline />
                <p>Wallet: connected</p>
              </div>
            ) : (
              <div className={style.Red}>
                <IoAlertCircleOutline />
                <p>Wallet: connected</p>
              </div>
            )}
            {chainBool ? (
              <div className={style.Green}>
                <IoCheckmarkCircleOutline />
                <p>Network: Smart chain</p>
              </div>
            ) : (
              <div className={style.Red}>
                <IoAlertCircleOutline />
                <p>Network: Smart chain</p>
              </div>
            )}
            {isConnected && chainBool ? (
              <div className={style.Green}>
                <IoCheckmarkCircleOutline />
                <p>Registration: available</p>
              </div>
            ) : (
              <div className={style.Red}>
                <IoAlertCircleOutline />
                <p>Registration: available</p>
              </div>
            )}
            {balance.data?.formatted >= 10 ? (
              <div className={style.Green}>
                <IoCheckmarkCircleOutline />
                <p>Balance: min 10 BUSD or 0.042 BNB</p>
              </div>
            ) : (
              <div className={style.Red}>
                <IoAlertCircleOutline />
                <p>Balance: min 10 BUSD or 0.042 BNB</p>
              </div>
            )}
            <div>
              <IoRadioButtonOffOutline />
              <p>Approve BUSD</p>
            </div>
          </div>
          <button className={style.CheckAgain}>Check again </button>
        </div>
        <div className={style.Information}>
          <div className={style.FlexInfo}>
            <div className={style.Title}>
              <AiFillInfoCircle />
              <h1>Information</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterDashboard;
