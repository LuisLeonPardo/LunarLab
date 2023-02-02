import React from 'react'
import './index.css'
import Logo from '../../Assets/img-home.svg'

function Landing() {
    return (
        <div className='contenedor-landing'>
            <div>
                <h1>Token launch platform for <span>innovative</span> projects</h1>

                <p id='landing-label'>Access public and special rounds of high-quality crypto projects.</p>
                <button><p>How To Start</p></button>

            </div>

            <img src={Logo} alt="Logo" />


        </div>
    )
}

export default Landing