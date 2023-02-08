/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

function Menu() {
    return (
        <div>
            <ul className="menu">
                <li><NavLink exact activeClassName="active-link" to="#">DASHBOARD</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="#">PROJECTS</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="#">STAKING</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="#">BUY $AIR</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu