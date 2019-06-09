import React from 'react'
import './RightComponent.css'

const RightComponent = () => (
  <div className="RightComponent">
    <div className="right-flex">

      <div className="featured-dish-container">
         <img id="featured-image"></img>
         <h1>This section will feature a</h1>
         <h1>top-rated cheese dish</h1>
      </div>

      <div className="top-dishes-container">
        <button id="top-dishes-button"></button>
        <div>
         <p>a drop down list will appear..</p>
         <p>or will link a new page </p>
        </div>
      </div>
        
    </div>
    </div>
)

export default RightComponent;