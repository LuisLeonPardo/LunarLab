import React from 'react';
import sty from './index.module.css';
import RowActivity from './RowActivity';
import {AiFillEye} from 'react-icons/ai'
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function SectionActivity() {
	return (
		<div className={`${sty.activity}`}>
			{arr.map((e, index) => (
				<>
					<RowActivity />
          {index === arr.length - 1 ? null : <hr className={`${sty.activity__hr}`} />}
				</>
			))}
      <button className={`button ${sty.activity__button}`}><AiFillEye />See more</button>
		</div>
	);
}

export default SectionActivity;
