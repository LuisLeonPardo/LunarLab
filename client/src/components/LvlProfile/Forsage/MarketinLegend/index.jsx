import React from 'react'
import './index.css'
import Imagen1Forsage from '../../../Assets/img-forsage-1.svg'
import Imagen2Forsage from '../../../Assets/forsage-leon.svg'
import CardForsage from './CardForsage';
import BarMenuForsage from './BarMenuForsage';

const dataCardsForsage = [
    {
        level: 1,
        coins: 5,
        img: Imagen1Forsage,
        users: 0,
        reload: 0,
        boolean: true,
    },
    {
        level: 2,
        coins: 10,
        img: Imagen1Forsage,
        users: 0,
        reload: 0,
        boolean: true,
    },
    {
        level: 3,
        coins: 20,
        img: Imagen2Forsage,
        users: 0,
        reload: 0,
        boolean: false,
    },
    {
        level: 4,
        coins: 40,
        img: Imagen2Forsage,
        users: 0,
        reload: 0,
        boolean: false,
    },
    {
        level: 5,
        coins: 80,
        img: Imagen2Forsage,
        users: 0,
        reload: 0,
        boolean: false,
    },
    {
        level: 6,
        coins: 160,
        img: Imagen2Forsage,
        users: 0,
        reload: 0,
        boolean: false,
    },
    {
        level: 7,
        coins: 320,
        img: Imagen2Forsage,
        users: 0,
        reload: 0,
        boolean: false,
    },
]

function MarketingLegendCards() {


    return (
        <div className='forsage-marketin-legend'>
            <div className='forsage-marketin-legend-cards'>
                {
                    dataCardsForsage?.map((forsagecard, indice) => (

                        <CardForsage
                            key={indice}
                            level={forsagecard.level}
                            coins={forsagecard.coins}
                            imagen={forsagecard.img}
                            users={forsagecard.users}
                            reload={forsagecard.reload}
                            boolean={forsagecard.boolean}
                        />
                    ))

                }
            </div>

            <BarMenuForsage />
        </div>
    )
}

export default MarketingLegendCards