/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Menu from './Menu';
import icon from '../../Assets/Group 27848.svg';
import './index.css'
function NewNavbar() {
	return (
		<nav className="nav">
			<div className="logo">
				<a href="#">
					<img src={icon} alt="icon" />
				</a>
			</div>
			<Menu />
		</nav>
	);
}

export default NewNavbar;
