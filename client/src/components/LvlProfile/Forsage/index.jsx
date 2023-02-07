import React from 'react'
import './index.css'
import ForsageTitleSm from './ForsageTitleSm'
import ForsageTitleLg from './ForsageTitleLg'
import MarketingLegendCards from './MarketinLegend'

function Forsage() {
    return (
        <div className="home-forsage">
            <ForsageTitleSm />
            <ForsageTitleLg />
            <MarketingLegendCards />

            <div>Aca va la tabla</div>
        </div>
    )
}

export default Forsage