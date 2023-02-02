import React from 'react'
import sty from './index.module.css'
function CardStructure({children}) {
  return (
    <div className={`${sty.cardStructure}`}>{children}</div>
  )
}

export default CardStructure