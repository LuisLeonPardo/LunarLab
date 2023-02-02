import React from 'react'
import sty from './index.module.css'
function SearchBar() {
  return (
    <div className={`${sty.searchBar}`}>
      <label htmlFor="searchId" className={`${sty.searchBar__label}`}>Enter ID or Lab wallet</label>
      <input type="search" name='searchId' className={`${sty.searchBar__input}`}/>
      <button className={`button ${sty.searchBar__button}`}>Preview</button>
    </div>
  )
}

export default SearchBar