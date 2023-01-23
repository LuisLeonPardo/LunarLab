import React from 'react';
import icon from '../../Assets/Group 27848.svg';
import styles from './index.module.css';
import instagram from '../../Assets/instagram.svg';
import twitter from '../../Assets/twitter.svg';
import tiktok from '../../Assets/tiktok.svg';
import linkedin from '../../Assets/vector.svg';
import github from '../../Assets/github.svg';
function Footer() {
	return (
		<footer className={styles.footerLunar}>
			<hr className={styles.hrFooter}/>
			<div className={styles.wraperAboutNav}>
				<div className={styles.about}>
					<img src={icon} alt="icon lunarLab" />
					<p>
						LunarLab is the launchpad for IDO, where our mission is to connect
						highly vetted founders with brilliant ideas for curated projects and
						crowdfunded deals and best-in-class incubation tools and advisors to
						bring the vision of founders and creators to life. the benefit of
						all.
					</p>
				</div>
				<nav className={styles.navFooter}>
					<h4>Quick links</h4>
					<ul>
						<li>Upcoming Projects</li>
						<li>Staking</li>
						<li>Buy $AIR</li>
					</ul>
				</nav>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<img src={instagram} alt="instagram" />
					</li>
					<li>
						<img src={twitter} alt="twitter" />
					</li>
					<li>
						<img src={github} alt="github" />
					</li>
					<li>
						<img src={linkedin} alt="linkedin" />
					</li>
					<li>
						<img src={tiktok} alt="tiktok" />
					</li>
				</ul>
				<p>© 2023 PD LunarLab.</p>
			</div>
		</footer>
	);
}

export default Footer;
