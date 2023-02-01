import React from 'react'
import './index.css'
import LandingFooterImg from '../../Assets/landing-footer.svg'

function LandingFooter() {
    return (
        <div className='contenedor-landing-footer'>
            <img src={LandingFooterImg} alt="LandingFooter" />
        </div>
    )
}

export default LandingFooter