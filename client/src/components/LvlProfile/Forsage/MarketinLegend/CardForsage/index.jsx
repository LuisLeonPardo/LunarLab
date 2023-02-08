import React from 'react'
import './index.css'
import Coin from '../../../../Assets/coin.svg'
import ForsageUsers from '../../../../Assets/forsage-users.svg'
import ForsageReload from '../../../../Assets/forsage-reload.svg'

function CardForsage({ level, coins, imagen, users, reload, boolean }) {
    return (
        <div className={`card-main ${boolean ? "card-main-blue" : "card-main-black"}`}>
            <div id='primerafila'>
                <div>
                    <span id='primerafila-span'>lvl {level}</span>
                </div>
                <div id='primerafila-img' >
                    <img id='primerafila-img-ico' src={Coin} alt="incono1" />
                    <span id='primerafila-img-span'>{coins}</span>
                </div>
            </div>

            <div id='segundafila'>
                <img src={imagen} alt="imagen1" />
            </div>

            {boolean ? <div id='tercerafila'>
                <div id='tercerafila-div-uno'>
                    <img id='tercerafila-div-uno-img' src={ForsageUsers} alt="icono1" />
                    <span id='tercerafila-div-uno-span'>{users}</span>
                </div>
                <div id='tercerafila-div-dos'>
                    <img id='tercerafila-div-dos-img' src={ForsageReload} alt="icono2" />
                    <span id='tercerafila-div-dos-span'>{reload}</span>
                </div>
            </div> : null}

        </div>
    )
}

export default CardForsage