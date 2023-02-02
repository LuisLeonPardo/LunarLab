import React from 'react';
import CardStructure from '../AccountPreview/CardStructure';
import ContentInfo from './ContentInfo';
import Contracts from './Contracts';
import sty from './index.module.css'
function AsideCards() {
	return (
		<aside className={`${sty.asideCards}`}>
			<CardStructure>
				<ContentInfo info='Members total' value='924 532' growth='3 361' boolean={true} />
			</CardStructure>
			<CardStructure>
				<ContentInfo info='Members received, BUSD' value='85 645 612.76' growth='604 471.1' boolean={true}/>
			</CardStructure>
			<CardStructure>
				<p className={`${sty.asideCards__p}`} >Forsage BUSD Contracts</p>
				<Contracts name='x3/x4' code='0x5ac...B97' />
				<hr className={`${sty.asideCards__hr}`} />
				<Contracts name='xXx' code='0x2CA...e52' />
				<hr className={`${sty.asideCards__hr}`} />
				<Contracts name='xGold' code='0x988...7C5' />
				<hr className={`${sty.asideCards__hr}`} />
				<ContentInfo info='Transactions made' value='3 469 583' growth='13 722' boolean={false}/>
				<hr className={`${sty.asideCards__hr}`} />
				<ContentInfo info='Turnover, BUSD' value='171 291 225.52' growth='1 208 942.2' boolean={false} />
			</CardStructure>
		</aside>
	);
}

export default AsideCards;
