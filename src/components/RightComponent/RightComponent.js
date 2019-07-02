import React from 'react'
import './RightComponent.css'
import dish from '../../images/hotdish.jpg'

const RightComponent = () => (
  <div className="RightComponent">
    <div className="right-flex">

      <div className="featured-dish-container">
         {/* <img src={dish} id="featured-image" width="300" height="200"></img> */}
         <h5>Find the best cheez in town</h5>
      </div>

      <div className="top-dishes-container">
        <button id="button">BUTTON</button>
        <div>
         <p>.........</p>
         <p>..... </p>
        </div>
      </div>
        
    </div>
    </div>
)

export default RightComponent;