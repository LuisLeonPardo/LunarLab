import React from 'react';
import styles from './index.module.css';
import logo from '../Assets/libertum-icon.svg';
import bnb from '../Assets/bnb.svg';
import plane from '../Assets/plane.svg';
import megafono from '../Assets/megafono.svg';
import planet from '../Assets/planet.svg';
import twitter from '../Assets/twitter.svg';
import word from '../Assets/word.svg';
const icons = [plane, megafono, planet, twitter, word];
function Card() {
	return (
		<div className={styles.card}>
			<div>
				<div className={styles.hWrap}>
					<div>
						<h1 className={styles.title}>Libertum</h1>
						<h4 className={styles.acronimo}>LBM</h4>
					</div>
					<img src={bnb} alt="bnb" className={styles.bnb} />
					<img src={logo} alt="libertum" className={styles.logo} />
				</div>
				<ul className={styles.icons}>
					{icons.map((e, index) => (
						<li key={index}>
							<img src={e} alt="icon" />
						</li>
					))}
				</ul>
				<span className={styles.status}> REGISTER </span>
				<p className={styles.description}>
					Libertum Project is the bridge between the traditional economy and the
					Web3.0 economy.... Libertum facilitates the publication of P2P lending
					services (lending and borrowing LBM and other cryptocurrencies) and
					the use of DeFi services such as swaps, Libertum's stablecoin LUSD,
					vaults and the launchpad. In the future, Libertum will not only
					provide DeFi financial services and crypto-collateralized loans, but
					also seeks to expand the horizons of the credit market by connecting
					the real estate market with decentralized finance. This means that we
					will be a marketplace for the real estate market (buy-sell-invest) and
					a secondary market for all projects and platforms that align with the
					launchpad, which seek to enter the cryptographic loans with real
					collateral.
				</p>
			</div>
			<div className={styles.statsInfo}>
				<div className={styles.info}>
					<h3 className={styles.stats}>Total Raise</h3>
					<h3 className={styles.valueTotal}>$2 600 000</h3>
				</div>
				<div className={styles.info}>
					<h3 className={styles.stats}>Starts</h3>
					<h3 className={styles.valueStartsPrice}>TBA</h3>
				</div>
				<div className={styles.info}>
					<h3 className={styles.stats}>Price</h3>
					<h3 className={styles.valueStartsPrice}>1 LBM = 1.00 BUSD</h3>
				</div>
				<div className={styles.barPercentage}>
					<div className={styles.tbaInfo}>
						<h3 className={styles.stats}>TBA</h3>
						<label htmlFor='TBA' className={styles.valuePercentage}>0%</label>
					</div>
					<div className={styles.progressBar}>
						<progress id='TBA' max='100' value='0' className={styles.bar}></progress>
					</div>
					<div className={styles.fraction}>
						<h3>0 BUSD</h3>
						<h3>0 / 2 600 000 LBM</h3>
					</div>
				</div>
				<div className={styles.listing}>
					<h4>Listing Time</h4>
					<h4 className={styles.valueStartsPrice}>TBA</h4>
				</div>
			</div>
			<hr className={styles.hr}/>
			<h2>This IDO requires KYC verification.</h2>
		</div>
	);
}

export default Card;
