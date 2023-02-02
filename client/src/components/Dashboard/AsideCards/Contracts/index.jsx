import React from 'react';
import sty from './index.module.css';
import { RiFileCopyFill } from 'react-icons/ri';
import { BsLink45Deg } from 'react-icons/bs';
function Contracts({name, code}) {
	return (
		<div className={`${sty.contracts}`}>
			<p className={`${sty.contracts__p}`}>{name}</p>
			<div className={`${sty.contracts__div}`}>
				<span>{code}</span>
				<RiFileCopyFill />
				<BsLink45Deg />
			</div>
		</div>
	);
}

export default Contracts;
