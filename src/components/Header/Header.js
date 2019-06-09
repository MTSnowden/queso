import React from 'react'
import './Header.css'


const Header = () => (
  <div className="header">

    <div className="header-flex">
      <h1>This is the header </h1>
    </div>

    <div className="header-flex">
      <div>
        <img className="logo-img" src="./images/logo"></img>
      </div>

      <div className="account-login">
      <button>account login button</button>
      </div>
    </div>
  </div>
)

export default Header;