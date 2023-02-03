import s from "./index.module.css"
import arrow2 from '../../Assets/arrow2.svg'

export default function FCard ({name, busd, boxes, filled, color}) {
    let colors =[
        {
            blue: '#5B5EE1',
            radial : 'radial-gradient(circle 230px at 70% 110%, #383a92 0%, #242526)'
         }, 
        {   
            purple: '#7737FF',
            radial: 'radial-gradient(circle 230px at 70% 110%,#5428b5 0%, #242526)'
        }, 
        {
            pink: '#D03A94', 
            radial: 'radial-gradient(circle 230px at 70% 110%,#922667 0%, #242526)'
        }, 
        {
            yellow: '#FFA243',
            radial: 'radial-gradient(circle 230px at 70% 110%,#986029 0%, #242526)'
        }]
    let index = colors.find(el => el.hasOwnProperty(color))
    let boxGrid = []
    for(let i=1; i<=boxes; i++){
        if(i<=filled){
            boxGrid.push(<div className={s.coloredBox}/>)
        }
        else boxGrid.push(<div className={s.smallBox}/>)
    }

    return (
        <div className={s.general} style={{backgroundImage: index.radial}}>
            <div className={s.header}>
                <h1 className={s.text}>{name}</h1>
                <h1 className={s.text}>{busd} BUSD</h1>
            </div>
            <div className={s.body}>
                <div className={s.boxes}>
                    {boxGrid}
                </div>
                <div className={s.button} style={{background: Object.values(index)[0]}}>         
                    <p className={s.textB}>Preview</p>
                    <img src={arrow2} alt=''/>
                </div>
            </div>

        </div>
    )
};