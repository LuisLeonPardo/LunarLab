import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import LunarLab from '../../Assets/LUNARLAB.svg'

function Navbar() {
    return (
        <div className="contenedor-navBar">
            <div className='navBar'>
                <div className='navBar-iconoLunarLab'>
                    <img src={LunarLab} alt="LunarLab" />
                    <p>LUNARLAB</p>
                </div>
                <div className='navBar-iconosNavBar'>
                    <div className='navBarLinks'>
                        <Link id='navBar-btn-home' to="/home">Home</Link>
                        <Link id='navBar-btn-whitepaper' to="">Whitepaper</Link>
                        <Link id='navBar-btn-contacts' to="">Contacts</Link>
                        <Link id='navBar-btn-faq' to="">FAQ</Link>
                    </div>
                    <button className="navBar-btn-connect">Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar