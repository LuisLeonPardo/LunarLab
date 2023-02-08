import s from './index.module.css'
import check from '../../Assets/green.svg'
import red from '../../Assets/red.svg'
import upload from '../../Assets/upload.svg'

export default function ActivityRow ({id, change, contract, time , green}) {

    let colors = {
            xGold: '#FFA243',
            x3: '#5B5EE1',
            xXx: '#D03A94'
        }
    

    return (
        <div className={s.general}>
            <div className={s.info}>
                <img src={(green==='true')? check: red} alt=''/>
                <div className={s.id}>{id}</div>
                <div className={s.info2}>
                    <div className={(change==='activates')?'': s.change}>{change} {(change==='activates')?'': 'BUSD'}</div>
                    <div>{(change==='activates')?'': 'in'}</div>
                    <div style={{color : colors[contract]}}>{contract}</div>
                </div>
            </div>
            <div className={s.time}>
                <img src={upload} alt=''/>
                <div className={s.timeText}>{time}</div>
            </div>
        </div>
    )
}