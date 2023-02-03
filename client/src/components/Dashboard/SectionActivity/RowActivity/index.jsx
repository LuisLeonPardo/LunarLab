import React from 'react';
import { RiBook3Line } from 'react-icons/ri';
import sty from './index.module.css';
import { CiShare1 } from 'react-icons/ci';
function RowActivity() {
	return (
		<div className={`${sty.rowActivity}`}>
			<div className={`${sty.rowActivity__div}`}>
				<RiBook3Line className={`${sty.rowActivity__iconAction} ${sty.buy}`} />
				<span className={`${sty.rowActivity__id}`}>ID 196358</span>
				<p className={`${sty.rowActivity__colorWhite}`}>
					<span className={`${sty.rowActivity__action}`}>+</span> 80 BUSD{' '}
					<span className={`${sty.rowActivity__action}`}>in</span>
				</p>
				<span className={`${sty.rowActivity__contract}`}>x4</span>
			</div>
			<div className={`${sty.rowActivity__div}`}>
				<CiShare1 className={`${sty.rowActivity__colorWhite}`} />
				<span className={`${sty.rowActivity__action}`}>~ 1 hour</span>
			</div>
		</div>
	);
}

export default RowActivity;
