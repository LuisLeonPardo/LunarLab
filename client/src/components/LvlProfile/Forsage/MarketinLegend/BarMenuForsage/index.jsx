import React from 'react'
import './index.css'
import IconoUsers from '../../../../Assets/ico-users.svg'
import Reload from '../../../../Assets/reload.svg'
import Interrogacion from '../../../../Assets/signo-interrogacion.svg'

function BarMenuForsage() {
    return (
        <div className='forsage-marketin-legend-details' >
            <div className='forsage-marketin-legend-details-div-uno forsage-general'>
                <div className='circulo white' />
                <span>Direct partner</span>
            </div>

            <div className='forsage-marketin-legend-details-div-dos forsage-general'>
                <div className='circulo blue' />
                <span>panGift</span>
            </div>

            <div className='forsage-marketin-legend-details-div-tres forsage-general'>
                <img id='forsage-marketin-legend-details-div-tres-img' src={IconoUsers} alt="imagen" />
                <span>Partners on level</span>
            </div>

            <div className='forsage-marketin-legend-details-div-cuatro forsage-general'>
                <img id='forsage-marketin-legend-details-div-cuatro-img' src={Reload} alt="imagen" />
                <span>Level Cycle</span>
            </div>

            <button className='forsage-marketin-legend-details-button forsage-general'>
                <img src={Interrogacion} alt="imagen" />
                <span>Marketing legend</span>
            </button>

        </div>
    )
}

export default BarMenuForsage