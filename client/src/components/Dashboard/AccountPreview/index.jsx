import React from 'react';
import SearchBar from './SearchBar';
import sty from './index.module.css'
import CardStructure from './CardStructure';
import rocket from '../../Assets/rocket.png'
function AccountPreview() {
	return (
		<div className={`${sty.accountPreview}`}>
			<h2 className={`${sty.accountPreview__h2}`}>Account preview</h2>
      <p className={`${sty.accountPreview__p}`}>Look up any LunarLab member account in preview mode. Enter ID or Lab address to preview or click Demo to view a random account.</p>
			<SearchBar />
      <CardStructure >
        <div className={`${sty.card}`}>
          <p className={`${sty.card__p}`}>Don’t know any ID?</p>
          <button className={`button ${sty.card__button}`}>Check Demo</button>
          <img src={rocket} alt="Rocket"  className={`${sty.card__img}`}/>
        </div>
      </CardStructure>
		</div>
	);
}

export default AccountPreview;
