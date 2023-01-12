import React, { useState } from 'react';
import styles from './index.module.css';
import MetaMask from '../../Assets/MetaMask.svg';
import WalletConnect from '../../Assets/WalletConnect.svg';
import Meta from '../../Assets/Meta.svg';
import Arrow from '../../Assets/Arrow.svg';
function Modal() {
	const [getWallet, setGetWallet] = useState(false);
	const handleGetWallet = () => {
		setGetWallet(!getWallet);
	};
	return (
		<article className={`${styles.modal} ${styles.isOpen}`}>
			<div className={styles.modalContainer}>
				<section className={styles.wallets}>
					<h2>Connect a Wallet</h2>
					<h4>Recommended</h4>
					<div>
						<img src={MetaMask} alt="MetaMask" />
						<div>
							<h3>MetaMask</h3>
              <h5>Recent</h5>
						</div>
					</div>
					<div>
						<img src={WalletConnect} alt="WalletConnect" />
						<h3>WalletConnect</h3>
					</div>
				</section>
				<section className={styles.infoWallets}>
					<header>
						{getWallet ? (
							<button onClick={handleGetWallet}>
								<img src={Arrow} alt="Arrow" />
							</button>
						) : null}
						{getWallet ? <h2>Get a Wallet</h2> : null}
						<button>X</button>
					</header>
					{getWallet ? (
						<div>
							<h2>What is a Wallet?</h2>
							<div>
								<img src="" alt="" />
								<div>
									<h3></h3>
									<p></p>
								</div>
							</div>
							<div>
								<img src="" alt="" />
								<div>
									<h3></h3>
									<p></p>
								</div>
							</div>
						</div>
					) : (
						<div>
							<img src={Meta} alt="MetaMask" />
							<div>
								<h3>MetaMask</h3>
								<h5>Mobile Wallet and Extension</h5>
							</div>
							<button>get</button>
						</div>
					)}
					{getWallet ? (
						<h4>Not what you're looking for?</h4>
					) : (
						<button onClick={handleGetWallet}>Get a Wallet</button>
					)}
					{getWallet ? (
						<p>
							Select a wallet on the left to get started with a different wallet
							provider
						</p>
					) : (
						<button>Learn More</button>
					)}
				</section>
			</div>
		</article>
	);
}

export default Modal;
