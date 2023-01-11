import React from 'react';
import Card from '../../Card';
import styles from './index.module.css';
import libertum from '../../Assets/libertum-icon.svg';
import NavBarBottomHome from '../NavBarBottomHome'
const projects = [
	{
		title: 'Libertum',
		status: 'finished',
		acronimo: 'LBM',
		description:
			"Libertum Project is the bridge between the traditional economy and the Web3.0 economy.... Libertum facilitates the publication of P2P lending services (lending and borrowing LBM and other cryptocurrencies) and the use of DeFi services such as swaps, Libertum's stablecoin LUSD, vaults and the launchpad. In the future, Libertum will not only provide DeFi financial services and crypto-collateralized loans, but also seeks to expand the horizons of the credit market by connecting the real estate market with decentralized finance. This means that we will be a marketplace for the real estate market (buy-sell-invest) and a secondary market for all projects and platforms that align with the launchpad, which seek to enter the cryptographic loans with real collateral.",
		totalRise: '2 600 000',
		starts: 'TBA',
		price: '1 LBM = 1.00 BUSD',
		logo: libertum
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null
	},
];

function SectionCards() {
	return (
		<div className={styles.sectionCards}>
			<NavBarBottomHome />
			{/* <h1>Upcomming IDOs</h1> */}
			<div className={styles.cards}>
				{projects.map((project, index) => (
					<Card
						key={index}
						title={project.title}
						status={project.status}
						acronimo={project.acronimo}
						description={project.description}
						totalRise={project.totalRise}
						starts={project.starts}
						price={project.price}
						logo={project.logo}
					/>
				))}
			</div>
		</div>
	);
}

export default SectionCards;
