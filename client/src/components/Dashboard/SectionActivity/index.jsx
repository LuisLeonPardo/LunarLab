import React, {useState} from 'react';
import sty from './index.module.css';
import RowActivity from './RowActivity';
import { AiFillEye } from 'react-icons/ai';
const arr = [
	{
		id: '196358',
		contract: 'xGold',
		time: '1 hour',
		action: 'buy',
		value: '38',
	},
	{
		id: '196370',
		contract: 'xXx',
		time: '1 hour',
		action: 'activates',
		value: '38',
	},
	{
		id: '190158',
		contract: 'xGold',
		time: '1 hour',
		action: 'add',
		value: '38',
	},
	{
		id: '206358',
		contract: 'x4',
		time: '1 hour',
		action: 'buy',
		value: '85',
	},
	{
		id: '196558',
		contract: 'xXx',
		time: '1 hour',
		action: 'bonus',
		value: '38',
	},
	{
		id: '196387',
		contract: 'xGold',
		time: '1 hour',
		action: 'bonus',
		value: '100',
	},
	{
		id: '196359',
		contract: 'x4',
		time: '1 hour',
		action: 'buy',
		value: '55',
	},
	{
		id: '196360',
		contract: 'xGold',
		time: '1 hour',
		action: 'activates',
		value: '71',
	},
	{
		id: '196331',
		contract: 'xGold',
		time: '1 hour',
		action: 'add',
		value: '50',
	},
	{
		id: '196361',
		contract: 'x3',
		time: '1 hour',
		action: 'buy',
		value: '40',
	},
	{
		id: '758921',
		contract: 'x3',
		time: '1 hour',
		action: 'bonus',
		value: '120',
	},
	{
		id: '789456',
		contract: 'x4',
		time: '1 hour',
		action: 'buy',
		value: '82',
	},
];
function SectionActivity() {
	const [activityIndex, setActivityIndex] = useState(11)
	const activity = arr.slice(0, activityIndex)
	const handleClick = () => {
		setActivityIndex(activityIndex + 10)
		console.log(activityIndex)
	}
	return (
		<div className={`${sty.activity}`}>
			<div className={`${sty.activity__div}`}>
				{activity.map((e, index) => (
					<>
						<RowActivity
							id={e.id}
							contract={e.contract}
							time={e.time}
							action={e.action}
							value={e.value}
						/>
						{index === arr.length - 1 ? null : (
							<hr className={`${sty.activity__hr}`} />
						)}
					</>
				))}
			</div>
			<button className={`button ${sty.activity__button}`} onClick={handleClick}>
				<AiFillEye />
				See more
			</button>
		</div>
	);
}

export default SectionActivity;
