/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LunarLab from "../Assets/Group 27848.svg";
import './index.css'
import Menu from './Navbar/Menu';
import MoreIncome from './MoreIncome';

function LiveProfile() {
    return (
        <div className='container'>
            <div className='container-a'>

                <nav className='nav'>
                    <div className='logo'>
                        <a href="#">
                            <img src={LunarLab} alt="LunarLab" />
                        </a>
                    </div>
                    <Menu />
                </nav>

                <MoreIncome className='home-more' />

            </div>

            <div className='container-b'>
                <h1>Contendor B</h1>
            </div>

            <div className='container-c'>
                <h1>Contendor C</h1>
            </div>

        </div>
    );
}

export default LiveProfile;
