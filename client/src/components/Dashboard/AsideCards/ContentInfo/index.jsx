import React from 'react'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {BsArrowUpShort} from 'react-icons/bs'
import sty from './index.module.css'
function ContentInfo({info, value, growth, boolean}) {
  return (
    <div className={`${sty.contentInfo}`}>
        <p className={`${sty.contentInfo__p}`}>{info}</p>
        {boolean ? <AiFillQuestionCircle className={`${sty.contentInfo__icon}`}/> : null}
        <h2 className={`${sty.contentInfo__h2}`}>{value}</h2>
        <span className={`${sty.contentInfo__span}`}> <BsArrowUpShort />{growth}</span>
    </div>
  )
}

export default ContentInfo