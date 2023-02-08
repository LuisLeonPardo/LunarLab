import React from "react";
import style from "./RegisterDashboard.module.scss";
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoRadioButtonOffOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

import { AiFillInfoCircle } from "react-icons/ai";

import { useAccount, useNetwork, useBalance } from "wagmi";
import CustomConnectButtom from "../WalletConnect/CustomConnectButtom";

function RegisterDashboard() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const { data } = useBalance({
    address: address,
  });

  const balanceBUSD = useBalance({
    address: address,
    token: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  });

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
            {balanceBUSD.data?.formatted >= 10 ? (
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
          {isConnected ? (
            <button className={style.CheckAgain}>Check again </button>
          ) : (
            <div className={style.CheckAgain2}>
              <CustomConnectButtom />
            </div>
          )}
        </div>
        <div className={style.Information}>
          <div className={style.FlexInfo}>
            <div className={style.Title}>
              <AiFillInfoCircle />
              <h1>Information</h1>
            </div>
            {balanceBUSD.data?.formatted < 10 ? (
              <div className={style.Info}>
                <p>
                  <strong>Insufficient balance for registration.</strong>
                  <br />
                  Registration requires <strong>10 BUSD</strong> and at least
                  <strong> 0.005 BNB</strong> Your wallet ballance:{" "}
                  {balanceBUSD.data?.formatted + " " + balanceBUSD.data?.symbol}{" "}
                  and {data?.formatted + " " + data?.symbol}.
                </p>
              </div>
            ) : (
              <div className={style.Info}>
                <p>
                  <br /> Your wallet ballance:{" "}
                  <strong>
                    {balanceBUSD.data?.formatted +
                      " " +
                      balanceBUSD.data?.symbol}
                  </strong>{" "}
                  and <strong>{data?.formatted + " " + data?.symbol}</strong>.
                </p>
              </div>
            )}
            <button className={style.GuideButton}> Read guide</button>
            <img src="./icons/video.png" alt="video" />
            <div className={style.Help}>
              <IoChatbubbleEllipsesOutline />
              <p>
                Need help with registration? <br />
                Talk to experts in the <strong>support chat</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterDashboard;
