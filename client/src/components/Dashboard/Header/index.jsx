import React, { useState } from 'react';
import styles from './index.module.css';
import img from '../../Assets/headerimg.svg';
import CustomConnectButtom from '../../WalletConnect/CustomConnectButtom';
import style from '../../WalletConnect/CustomConnect.module.scss';
import { SiBinance } from 'react-icons/si';
import busd from '../../Assets/BUSD.png';
import { RiBook3Line } from 'react-icons/ri';
import { HiOutlineLogout } from 'react-icons/hi';
import { RxDividerVertical } from 'react-icons/rx';
function Header() {
	const [logged, setlogged] = useState(true);
	return (
		<header className={`${styles.header}`}>
			{logged ? (
				<div className={styles.logged}>
					<SiBinance className={`${styles.currencyIcon} ${styles.binance}`} />
					<span className={`${styles.smart}`}>Smart Chain</span>
					<img
						src={busd}
						alt="BUSD"
						className={`${styles.currencyIcon} ${styles.busd}`}
					/>
					<span>0.00 BUSD</span>
					<RxDividerVertical className={styles.vr} />
					<SiBinance
						className={`${styles.currencyIcon} ${styles.binanceGold}`}
					/>
					<span className={`${styles.bnb}`}>0.000 BNB</span>
					<RxDividerVertical className={styles.vr} />
					<RiBook3Line />
					<span className={`${styles.contract}`}>0xac...a4</span>
					<button className={`${styles.logout}`} onClick={() => setlogged(false)}>
						<HiOutlineLogout className={styles.logoutIcon} />
					</button>
				</div>
			) : null}
			<h1 className={`${styles.header__h1}`}>
				{logged ? 'Register in LonarLab' : 'LunarLab main page'}
			</h1>
			<p className={`${styles.header__p}`}>
				Connect wallet to Register or Login
			</p>
			<CustomConnectButtom
				container={style.OpenContainer}
				grid={true}
				logged={logged}
			/>
			<button className={`button ${styles.header__buttonHelp}`}>Help me</button>
			<img src={img} alt="autopilot on" className={`${styles.header__img}`} />
		</header>
	);
}

export default Header;
