/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.css';
import MoreIncome from './MoreIncome';

function LiveProfile() {
	return (
		<div className="container">
			<div className="container-a">
				<MoreIncome className="home-more" />
			</div>

			<div className="container-b">
				<h1>Contendor B</h1>
			</div>

			<div className="container-c">
				<h1>Contendor C</h1>
			</div>
		</div>
	);
}

export default LiveProfile;
