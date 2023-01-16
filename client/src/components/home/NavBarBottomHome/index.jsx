import React, { useState } from 'react';
import styles from './index.module.css';

function NavBarBottomHome({ upcoming, setUpcoming }) {
	const [upcomming, setUpcomming] = useState(true);
	const [ended, setEnded] = useState(false);

	const handleUpcomming = () => {
		setUpcomming(true);
		setEnded(false);
		setUpcoming(true)
	};
	const handleEnded = () => {
		setEnded(true);
		setUpcomming(false);
		setUpcoming(false)
	};
	return (
		<div className={styles.navBarWrap}>
			<div className={styles.navBarHomeBottom}>
				<div>
					<button
						onClick={handleUpcomming}
						className={`${upcomming ? styles.active : styles.notActive} ${styles.upcomming
							}`}
					>
						Upcoming
					</button>
					<button
						onClick={handleEnded}
						className={`${ended ? styles.active : styles.notActive} ${styles.ended
							}`}
					>
						Ended
					</button>
				</div>
				<div className={styles.inputWrapper}>
					<input
						type="search"
						className={styles.input}
						placeholder="Search pools"
					/>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={styles.inputIcon}
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<h1>Upcomming IDOs</h1>
		</div>
	);
}

export default NavBarBottomHome;
