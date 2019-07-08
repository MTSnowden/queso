import React from 'react'
import './RightComponent.css'
import dish from '../../images/hotdish.jpg'

const RightComponent = () => (
  <div className="RightComponent">
    <div className="right-flex">

      <div className="featured-dish-container">
         <img src={dish} 
              id="featured-image" 
              width="300" height="200">
          </img>
         <h5>Find the best cheez in town</h5>
         <form  className="search-form">
         <input className="search-bar" 
                type="text" />
         <button 
                className="search-button" 
                type>Search</button>
         </form>

      </div>

      <div className="top-dishes-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis justo erat. Praesent imperdiet accumsan purus et laoreet. Quisque sit amet nibh vel elit congu.


        </p>
        <div>
         <p>.........</p>
         <p>..... </p>
        </div>
      </div>
        
    </div>
    </div>
)

export default RightComponent;