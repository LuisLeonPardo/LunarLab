import React from 'react'
import './index.css'
import ForsageTitleSm from './ForsageTitleSm'
import ForsageTitleLg from './ForsageTitleLg'
import MarketingLegendCards from './MarketinLegend'
import ForsageTableLevel from './ForsageTable'

function Forsage() {
    return (
        <div className="home-forsage">
            <ForsageTitleSm />
            <ForsageTitleLg />
            <MarketingLegendCards />
            <ForsageTableLevel />
            <div className='div-derechos-autor'>
                <div>
                    <span id='color-uno'>© 2022 All Rights Reserved</span>
                </div>
                <div>
                    <span id='color-dos'>Disclaimer</span>
                </div>
            </div>
        </div>
    )
}

export default Forsage