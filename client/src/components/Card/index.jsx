import React, { useState } from 'react';
import styles from './index.module.css';
import bnb from '../Assets/bnb.svg';
import plane from '../Assets/plane.svg';
import megafono from '../Assets/megafono.svg';
import planet from '../Assets/planet.svg';
import twitter from '../Assets/twitter.svg';
import word from '../Assets/word.svg';
import noFoto from '../Assets/noFoto.svg';
const icons = [plane, megafono, planet, twitter, word];
function Card({
	title,
	status,
	acronimo,
	description,
	totalRise,
	starts,
	price,
	logo,
}) {
	const [isApprove, setIsApprove] = useState(false);
	const handleApprove = () => {
		setIsApprove(true);
	};
	return (
		<div className={styles.card}>
			<div>
				<div className={styles.hWrap}>
					<div>
						<h1 className={styles.title}>{title ? title : 'Comming Soon'}</h1>
						<h4 className={styles.acronimo}>{acronimo ? acronimo : 'EXP'}</h4>
					</div>
					<img src={bnb} alt="bnb" className={styles.bnb} />
					<img
						src={logo ? logo : noFoto}
						alt="libertum"
						className={styles.logo}
					/>
				</div>
				<ul className={styles.icons}>
					{icons.map((e, index) => (
						<li key={index}>
							<img src={e} alt="icon" />
						</li>
					))}
				</ul>
				<span className={styles.status}>
					{' '}
					{status === 'finished' ? 'Register' : 'upcoming'}{' '}
				</span>
				<p className={styles.description}>
					{description
						? description
						: 'Lorem ipsum dolor sit amet consectetur. Rhoncus rutrum ipsum nisl a placerat feugiat eleifend. Eget platea tempus proin varius cursus. Id eget pretium sed eget bibendum. Quam nullam senectus odio congue turpis massa suscipit tincidunt. Faucibus cras viverra id dis id nulla condimentum cursus gravida. Suspendisse quam ultricies semper ornare. Eget ultrices egestas vulputate ut etiam vestibulum lorem sed. Neque enim faucibus adipiscing in in turpis amet ut. Tincidunt feugiat volutpat aliquam nulla tincidunt eu malesuada erat. Dignissim senectus nunc enim sit sodales enim ac rhoncus. Tellus neque malesuada semper porta felis. Cras at faucibus lacus adipiscing vivamus. Nunc vitae ipsum non non vitae. Semper porttitor gravida mattis consectetur vel nibh aliquam ultrices. Commodo eu in quam fermentum phasellus. Id viverra a tellus sit in facilisi feugiat non duis. Maecenas dui quam et metus. Morbi massa duis fermentum interdum quis. Et nunc dolor duis nibh nibh enim. Enim orci tempus enim id dolor. Nunc praesent massa nunc sem ultricies duis. Lobortis nisl non est quisque diam vitae et faucibus. Sed vitae et egestas blandit aenean.'}
				</p>
			</div>
			<div className={styles.statsInfo}>
				<div className={styles.info}>
					<h3 className={styles.stats}>Total Raise</h3>
					<h3 className={styles.valueTotal}>
						{totalRise ? totalRise : '0 000 000'}
					</h3>
				</div>
				<div className={styles.info}>
					<h3 className={styles.stats}>Starts</h3>
					<h3 className={styles.valueStartsPrice}>{starts}</h3>
				</div>
				<div className={styles.info}>
					<h3 className={styles.stats}>Price</h3>
					<h3 className={styles.valueStartsPrice}>
						{price ? price : '1 EXP = 1.00 BUSD'}
					</h3>
				</div>
				<div className={styles.barPercentage}>
					<div className={styles.tbaInfo}>
						<h3 className={styles.stats}>TBA</h3>
						<label htmlFor="TBA" className={styles.valuePercentage}>
							0%
						</label>
					</div>
					<div className={styles.progressBar}>
						<progress
							id="TBA"
							max="100"
							value="0"
							className={styles.bar}
						></progress>
					</div>
					<div className={styles.fraction}>
						<h3>0 BUSD</h3>
						<h3>0 / 2 600 000 LBM</h3>
					</div>
				</div>
				<div className={styles.listing}>
					<h4>Listing Time</h4>
					<h4 className={styles.valueStartsPrice}>TBA</h4>
				</div>
			</div>
			<hr className={styles.hr} />
			<button
				onClick={handleApprove}
				className={isApprove ? styles.isApprove : styles.isNotApprove}
			>
				{isApprove ? 'Buy' : 'Approve'}
			</button>
		</div>
	);
}

export default Card;
