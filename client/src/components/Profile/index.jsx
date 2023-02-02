import styles from "./index.module.css"
import question from "../Assets/question.svg"
import Copy from '../Assets/Copy.svg'
import FCard from "./FCard"
import info from "./info.json"
import { useState } from "react"
import { useEffect } from "react"

export default function Profile() {
    const [forsage, setForsage] = useState()

    useEffect(()=>{
        setForsage(info.data)
    })


    return(
        <div className={styles.generalP}>
            <div className={styles.contentP}>
               <div className={styles.headerP}>
                    <div className={styles.profileP}>

                    </div>
                    <div className={styles.linkP}>
                        <div className={styles.title2}>
                            <h3 className={styles.textPL}>Personal link</h3>
                            <img src={question}/>
                        </div>
                        <a className={styles.link}>forsage.io/b/m6r4id</a>
                        <div className={styles.link}>
                            <img src={Copy} />
                        </div>
                        <div className={styles.signUp}>
                            <h3 className={styles.textSU}>Not a member yet? Sign up with this upline</h3>
                            <div className={styles.buttonSU}>Sign up</div>
                        </div>

                    </div>
               </div>
               <div className={styles.infoP}>
                    <div className={styles.rowP}>
                        <div className={styles.card1}>
                            Partners
                        </div>
                        <div className={styles.card1}>
                            Team
                        </div>
                        <div className={styles.card1}>
                            Ratio
                        </div>
                    </div>
                    <div className={styles.profitsP}>
                        Profits
                    </div>
               </div>
               <div className={styles.forsageP}>
                    <div className={styles.fheader}>
                        <h1 className={styles.title1}>Forsage Programs</h1>
                        <div className={styles.infoRow}>
                            <img src={question}/>
                            <p className={styles.textInfo}>Info</p>
                        </div>
                    </div>
                    <div className={styles.gridP}>
                        {forsage && forsage.map((el,index) => 
                        <FCard
                        key={index}
                        />
                        )}
                    </div>
               </div>
               <div className={styles.bodyP}>
                    <div className={styles.activityH}>
                        <h1 className={styles.title1}>Platform recent activity</h1>
                        <img src={question}/>
                    </div>
                    <div className={styles.activityC}>
                        <div className={styles.container1}>

                        </div>
                        <div className={styles.column}>
                            <div className={styles.container2}>

                            </div>
                            <div className={styles.container2}>
                                
                            </div>
                            <div className={styles.container3}>
                                
                            </div>
                        </div>
                    </div>
               </div>
               <div className={styles.disclaimerP}>
                    <h6 className={styles.textDisclaimer}>2020 All Rights Reserved</h6>
                    <h6 className={styles.textDisclaimer}>Disclaimer</h6>
               </div>
            </div>
        </div>
    )
};