import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { BinanceSmartChain, BinanceTestNet } from "./config/web3/chains/chains";
import {
  braveWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
  metaMaskWallet,
  walletConnectWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";

const { chains, provider } = configureChains(
  [BinanceSmartChain, BinanceTestNet],
  [
    alchemyProvider({
      apiKey: "ePeu2ooFujhSUo_Pqf5NS2uVDnz6ZiOO",
      priority: 0,
    }),
    publicProvider({ priority: 1 }),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Libertum",
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: "Libertum" }),
      walletConnectWallet({ chains }),
      braveWallet({ chains }),
      ledgerWallet({ chains }),
      trustWallet({ chains }),
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          initialChain={BinanceSmartChain}
          theme={darkTheme({
            accentColor: "#242486",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
