import React from 'react'

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">Contact List</h1>
    <div className="header--input__wrapper">
      <input 
        className="header--input"
        type="text" 
        onChange={(event) => props.onInputChange(event)}
        placeholder="Search"
      />
      <div className="magnifier-icon"></div>
    </div>
  </div>
)

export default Header
