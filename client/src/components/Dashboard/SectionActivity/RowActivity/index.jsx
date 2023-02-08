import React from 'react';
import { RiBook3Line } from 'react-icons/ri';
import sty from './index.module.css';
import { CiShare1 } from 'react-icons/ci';
import IconActive from '../../../Assets/IconActive';
import { IoMdPersonAdd } from 'react-icons/io';
import { AiFillGift } from 'react-icons/ai';
function RowActivity({ id, action, contract, time, value }) {
	return (
		<div className={`${sty.rowActivity}`}>
			<div className={`${sty.rowActivity__div}`}>
				{action === 'buy' ? (
					<RiBook3Line
						className={`${sty.rowActivity__iconAction} ${sty.buy}`}
					/>
				) : null}
				{action === 'activates' ? <IconActive /> : null}
				{action === 'add' ? (
					<IoMdPersonAdd
						className={`${sty.rowActivity__iconAction} ${sty.join}`}
					/>
				) : null}
				{action === 'bonus' ? (
					<AiFillGift className={`${sty.rowActivity__iconAction} ${sty.buy}`} />
				) : null}
				{action === 'add' ? (
					<span className={`${sty.rowActivity__action}`}>new user joined</span>
				) : null}
				<span className={`${sty.rowActivity__id}`}>ID {id}</span>
				{action === 'buy' ? (
					<p className={`${sty.rowActivity__colorWhite}`}>
						<span className={`${sty.rowActivity__action}`}>+</span> {value} BUSD{' '}
						<span className={`${sty.rowActivity__action}`}>in</span>
					</p>
				) : action === 'activates' ? (
					<span className={`${sty.rowActivity__action}`}>activates</span>
				) : action === 'bonus' ? (
					<p className={`${sty.rowActivity__colorWhite}`}>
						<span className={`${sty.rowActivity__action}`}>+ bonus</span>{' '}
						{value} BUSD{' '}
						<span className={`${sty.rowActivity__action}`}>in</span>
					</p>
				) : null}
				{action === 'add' ? null : (
					<span className={`${sty[contract]}`}>{contract}</span>
				)}
			</div>
			<div className={`${sty.rowActivity__div}`}>
				<CiShare1 className={`${sty.rowActivity__colorWhite}`} />
				<span className={`${sty.rowActivity__action}`}>~ {time}</span>
			</div>
		</div>
	);
}

export default RowActivity;
