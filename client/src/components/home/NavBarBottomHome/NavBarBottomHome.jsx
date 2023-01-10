import React, { useState } from 'react';
import './NavBarBottomHome.css';

function NavBarBottomHome() {
	const [upcomming, setUpcomming] = useState(true);
	const [ended, setEnded] = useState(false);

	const handleUpcomming = () => {
		setUpcomming(true);
		setEnded(false);
	};
	const handleEnded = () => {
		setEnded(true);
		setUpcomming(false);
	};
	return (
		<div className="navBarHomeBottom">
			<div>
				<button
					onClick={handleUpcomming}
					className={`${upcomming ? 'active' : 'notActive'} upcomming`}
				>
					Upcomming
				</button>
				<button
					onClick={handleEnded}
					className={`${ended ? 'active' : 'notActive'} ended`}
				>
					Ended
				</button>
			</div>
			<div class="input-wrapper">
				<input type="search" className="input" placeholder="Search pools" />

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="input-icon"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
}

export default NavBarBottomHome;
