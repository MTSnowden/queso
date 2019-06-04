import React from 'react'
import './Featured.css'

const Featured = () => (
  <div className="featured">
    <div className="featured-flex">
      <h1>This week's featured Cheez Kween</h1>
    </div>
    <div className="featured-flex">
      <div>
        <p>This section will feature a</p>
        <p>top-rated cheese dish on the home page</p>
        <div>
            <img className="featured-img" src="../images/hot-dish.jpg"></img>
        </div>
      </div>
    </div>
  </div>
)
export default Featured;