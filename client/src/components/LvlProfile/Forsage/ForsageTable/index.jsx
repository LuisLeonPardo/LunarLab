import React from 'react'
import './index.css'
import RowLevels from './ForsageRow'

import Upgrade from '../../../Assets/icono-upgrade.svg'
import Active from '../../../Assets/activate_program.svg'


function ForsageTableLevel() {

    const dataWalletLevel = [
        {
            imgType: Upgrade,
            date: "14.11.2022 19:42",
            ID: null,
            level: 2,
            wallet: "0x39C6e...Bb9c4",
            busd: "upgrade",
            upgrade: true
        },
        {
            imgType: Active,
            date: "14.11.2022 19:37",
            ID: null,
            level: 1,
            wallet: "0x39C6e...Bb9c4",
            busd: "activation",
            upgrade: false,
        },
    ]

    return (
        <div className='table-forsage-main'>
            <table className='table-forsage-level'>
                <tr className='table-forsage-level-thead'>
                    <th>Type</th>
                    <th>Date</th>
                    <th>ID</th>
                    <th>Level</th>
                    <th>Wallet</th>
                    <th>BUSD</th>
                </tr>
                {
                    dataWalletLevel?.map((walletlevel, indice) => (
                        <RowLevels
                            key={indice}
                            imgType={walletlevel.imgType}
                            date={walletlevel.date}
                            ID={walletlevel.ID}
                            level={walletlevel.level}
                            wallet={walletlevel.wallet}
                            busd={walletlevel.busd}
                            upgrade={walletlevel.upgrade}
                        />
                    ))
                }
            </table>
        </div>
    )
}

export default ForsageTableLevel