import React from 'react'
import './Header.css'


const Header = () => (
  <div className="header">

    <div className="header-flex">
    <img className="logo" src="../images/logo" alt="logo"></img>
    </div>

    <div className="header-flex">
      <div>
      <h1>This is the header.</h1>
      </div>
    </div>

      <div className="header-flex">
        <div>
        <button>account login button</button>
        </div>
      </div>
    
  </div>
)

export default Header;