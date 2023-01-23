import React from 'react';
import Footer from '../home/Footer';
import styles from './index.module.css';
import flying from '../Assets/MascotFlying.svg';
import investing from '../Assets/MascotInvesting.svg'

const Contact = () => {
    return (
        <div className={styles.container}>
            <section className={styles.firstSection}>
                <div className={styles.textHalf}>
                    <h3 className={styles.whiteLargeTitle}>
                        Do you have an <span className={styles.blueText}>amazing idea</span> and a motivated team?
                    </h3>
                    <p className={styles.whiteText}>
                        LunarLab is willing to receive information about your project and carry out the fundraising process through our launch platform. We have an online application process that ensures that your project meets the requirements to be submitted for community approval. If you are interested, please complete the application form and await further instructions to start the process.
                    </p>
                    <a className={styles.whiteButton}>Apply to Launch</a>
                </div>
                <img src={flying} alt='mascot flying' className={styles.imageHalf}/>
            </section>
            <section className={styles.secondSection}>
                <div className={styles.textHalf}>
                    <h3 className={styles.whiteMidTitle}>
                        Are you a top-tier project building the future?
                    </h3>
                    <p className={styles.whiteThinText}>
                        Get in touch with us today to discuss launching with Lunar Lab collaborative incubation and funding opportunities, and access to the Lunar Lab
                    </p>
                    <a className={styles.whiteButton}>Schedule a Meeting</a>
                </div>
                <img src={investing} alt='mascot investing' className={styles.imageHalf}/>
            </section>
            <section className={styles.thirdSection}>
                <h4 className={styles.whiteSmallTitle}>
                    Are you an investor and would you like to participate in the projects in a deeper way?
                </h4>
                <p className={styles.grayText}>
                    Join our VC team, within Keter Capital
                </p>
                <a className={styles.blueButton}>Apply</a>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact