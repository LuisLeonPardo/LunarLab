import React from 'react'
import './index.css'
import Titulo from './Titulo'
import Parrafo from './Parrafo'
import Boton from './Boton'

function Descripcion() {
    return (
        <div className='descripcion'>
            <Titulo />
            <Parrafo />
            <Boton />
        </div>
    )
}

export default Descripcion