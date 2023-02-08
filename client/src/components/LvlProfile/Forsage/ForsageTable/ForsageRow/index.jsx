import React from 'react'

import WalletUno from '../../../../Assets/ico-wallet-uno.svg'
import WalletDos from '../../../../Assets/ico-wallet-dos.svg'

function RowLevels({ imgType, date, ID, level, wallet, busd, upgrade }) {
    return (
        <>

            <tr className='table-forsage-level-tdisplay'>
                <td className='cirulo-img'>
                    <div className={`table-forsage-level-img-upgrade-activation ${upgrade ? "table-forsage-level-img-upgrade" : "table-forsage-level-img-activation"}`}>
                        <img src={imgType} alt="imagen" />
                    </div>
                </td>
                <td className='display-span'>
                    <span className='display-date-span'>{date}</span>
                </td>

                <td className='display-span'>
                    {ID}
                </td>


                <td className='display-span'>
                    <span className='display-date-span color-white'>{level}</span>
                </td>

                <td className='display-span'>
                    <div className='display-div' >
                        <span className='display-date-span color-white anchor-span-walllet'>{wallet}</span>
                        <img className='wallet-img' src={WalletUno} alt="incono1" />
                        <img className='wallet-img' src={WalletDos} alt="incono2" />
                    </div>
                </td>

                <td className={`display-span ${upgrade ? "color-update" : "color-active"}`}>
                    <span>{busd}</span>
                </td>

            </tr>
        </>
    )
}

export default RowLevels