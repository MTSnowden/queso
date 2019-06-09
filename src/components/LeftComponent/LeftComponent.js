import React from 'react'
import './LeftComponent.css'
import { GoogleApiWrapper } from 'google-maps-react';

const LeftComponent = () => (
  <div className="LeftComponent">
    <div className="left-flex">
      <h1>This is a map of austin </h1>
      <p>The map will have a search bar on the top</p>
      <p>Will generate all cheese dishes in the area</p>
      <p>Will generate icons for cheez kweens</p>
    </div>
  </div>

)


export class MapContainer extends React.Component {}

export default LeftComponent;