/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.css';
import MoreIncome from './MoreIncome';
import Forsage from './Forsage';

function LiveProfile() {
	return (
		<div className="container">
			<MoreIncome className="home-more" />
			<Forsage />
			<div id='div-separador' />
		</div>
	);
}

export default LiveProfile;
