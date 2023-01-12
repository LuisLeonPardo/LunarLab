import React from 'react'
import './index.css'
import Logo from '../../Assets/img-home.svg'

function Landing() {
    return (
        <div className='contenedor-landing'>
            <div>
                <h1>Token launch platform for <span>innovative</span> projects</h1>
                <p>Access public and special rounds of high-quality crypto projects.</p>
                <button><p>How To Start</p></button>
            </div>
            <img src={Logo} alt="Logo" />
        </div>
    )
}


/*
<div className='contenedor-landing'>
            <div className="landing-part1">
                <div className='container-landing-bloque'></div>
                <div className='landing-part1-texto'>
                    <div className='landign-container-text'>
                        <div id='landign-container-text-bloq1'>
                            <p>
                                Token launch platform for <span>innvovative</span> projects
                            </p>
                        </div>
                        <div id='landign-container-text-bloq2'>
                            <p>
                                Access public and special rounds of high-quality crypto projects
                            </p>
                        </div>
                    </div>
                    <div className='btn-landing'>
                        <button>How To Start</button>
                    </div>
                </div>
                <div className="landing-part1-img">
                    <p>Hola</p>
                </div>
            </div>
            <div className="landing-part2"><p>Parte 2</p></div>
</div>
*/

export default Landing