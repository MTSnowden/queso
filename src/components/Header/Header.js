import React from 'react'
import './Header.css'


const Header = () => (
  <div className="header">

    <div className="header-flex">
      <img id="logo" alt="logo"></img>
    </div>

    <div className="header-flex">
      <div>
      <h1>CHZPLZ</h1>
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