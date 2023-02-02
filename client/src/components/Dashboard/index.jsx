import React from 'react';
import AccountPreview from './AccountPreview';
import AsideCards from './AsideCards';
import Header from './Header';
import styles from './index.module.css';
import SectionActivity from './SectionActivity';
function Dashboard() {
	return (
		<div className={`${styles.dashboard}`}>
			<Header />
			<AccountPreview />
			<section className={`${styles.dashboard__section}`}>
				{/* <SectionActivity /> */}
				<AsideCards />
			</section>
		</div>
	);
}

export default Dashboard;
