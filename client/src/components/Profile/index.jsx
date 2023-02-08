import styles from "./index.module.css"
import question from "../Assets/question.svg"
import Copy from '../Assets/Copy.svg'
import profile from '../Assets/profile.svg'
import seemore from '../Assets/seemore.svg'
import FCard from "./FCard"
import info from "./info.json"
import activityData from "./activity.json"
import { useState } from "react"
import { useEffect } from "react"
import division from '../Assets/division.svg'
import ContentInfo from "../Dashboard/AsideCards/ContentInfo"
import Contracts from "../Dashboard/AsideCards/Contracts"
import ActivityRow from "./ActivityRow"

export default function Profile() {
    const [forsage, setForsage] = useState()
    const [activity, setActivity] = useState()

    useEffect(()=>{
        setForsage(info.data)
        setActivity(activityData.data)
    },[])


    return(
        <div className={styles.generalP}>
            <div className={styles.contentP}>
               <div className={styles.headerP}>
                    <div className={styles.profileP}>
                        <div className={styles.profilePic}>
                            <img src={profile} alt=''/>
                        </div>
                        <div className={styles.profileColumn}>
                            <div className={styles.profileRow}>
                                <p className={styles.profileName}>Kaneez</p>
                                <p className={styles.profileId}>ID 843032</p>
                            </div>
                            <div className={styles.profileRow}>
                                <p className={styles.profileAdress}>0x39C6...b9c4</p>
                                <img src={Copy} alt=''/>
                            </div>
                            <div className={styles.profileRow}>
                                <p className={styles.invitedBy}>invited 14.11.2022 by</p>
                                <div className={styles.invitedId}>ID 712025</div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.linkP}>
                        <div className={styles.title2}>
                            <h3 className={styles.textPL}>Personal link</h3>
                            <img src={question} alt=''/>
                        </div>
                        <div className={styles.link}>forsage.io/b/m6r4id</div>
                        <div className={styles.link}>
                            <img src={Copy} alt=''/>
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
                            <div className={styles.card1H}>
                                <div className={styles.card1T}>Partners</div>
                                <img src={question} alt=''/>
                            </div>
                            <div className={styles.change}>0</div>
                            <div className={styles.change2}>↑ 0</div>
                        </div>
                        <div className={styles.card1}>
                            <div className={styles.card1H}>
                                <div className={styles.card1T}>Team</div>
                                <img src={question} alt=''/>
                            </div>
                            <div className={styles.change}>0</div>
                            <div className={styles.change2}>↑ 0</div>
                        </div>
                        <div className={styles.card1}>
                            <div className={styles.card1H}>
                                <div className={styles.card1T}>Ratio</div>
                                <img src={question} alt=''/>
                            </div>
                            <div className={styles.change}>52 %</div>
                            <div className={styles.change2}>↑ 10 %</div>
                        </div>
                    </div>
                    <div className={styles.profitsP}>
                        <div className={styles.cardP}>
                            <div className={styles.card1H}>
                                <div className={styles.card1T}>Profits</div>
                                <img src={question} alt=''/>
                            </div>
                            <div className={styles.change}>25 BUSD</div>
                            <div className={styles.change2}>↑ 5 BUSD</div>
                        </div>
                        <div className={styles.dContainer}>
                            <img src={division} alt='' className={styles.division}/>
                        </div>
                    </div>
               </div>
               <div className={styles.forsageP}>
                    <div className={styles.fheader}>
                        <h1 className={styles.title1}>Forsage Programs</h1>
                        <div className={styles.infoRow}>
                            <img src={question} alt=''/>
                            <p className={styles.textInfo}>Info</p>
                        </div>
                    </div>
                    <div className={styles.gridP}>
                        {forsage && forsage.map((el,index) => 
                        <FCard
                        key={index}
                        name = {el.name}
                        busd= {el.busd}
                        boxes = {el.boxes}
                        filled = {el.filled}
                        color = {el.color}
                        />
                        )}
                    </div>
               </div>
               <div className={styles.bodyP}>
                    <div className={styles.activityH}>
                        <h1 className={styles.title1}>Profile recent activity</h1>
                        <img src={question} alt=''/>
                    </div>
                    <div className={styles.activityC}>
                        <div className={styles.container1}>
                            {activity && activity.map((el,index) =>
                                <ActivityRow
                                key={index}
                                id = {el.id}
                                change = {el.change}
                                contract = {el.contract}
                                time = {el.time}
                                green = {el.green}
                                />
                            )}
                            <div className={styles.seemore}>
                                <img src={seemore} alt=''/>
                                <p className={styles.seeText}>See more</p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.container2}>
				                <ContentInfo info='Members total' value='925 836' growth='3 324' boolean={true} />
                            </div>
                            <div className={styles.container2}>
				                    <ContentInfo info='Members received, BUSD' value='85 805 955.36' growth='585 939.1' boolean={true}/>
                            </div>
                            <div className={styles.container3}>
                                <p className={styles.p}>Forsage BUSD Contracts</p>
                                <Contracts name='x3/x4' code='0x5ac...B97' />
                                <hr className={styles.hr}/>
                                <Contracts name='xXx' code='0x2CA...e52' />
                                <hr className={styles.hr} />
                                <Contracts name='xGold' code='0x988...7C5' />
                                <hr className={styles.hr} />
                                <ContentInfo info='Transactions made' value='3 474 583' growth='13 361' boolean={false}/>
                                <hr className={styles.hr} />
                                <ContentInfo info='Turnover, BUSD' value='171 611 910.72' growth='1 171 878.72' boolean={false} /> 
                            </div>
                        </div>
                    </div>
               </div>
               <div className={styles.disclaimerP}>
                    <h6 className={styles.textDisclaimer1}>&copy; 2023 All Rights Reserved</h6>
                    <h6 className={styles.textDisclaimer2}>Disclaimer</h6>
               </div>
            </div>
        </div>
    )
};