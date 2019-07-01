import React from 'react'
import './LeftComponent.css'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
// import { GoogleApiWrapper } from 'google-maps-react';



function Map() {
 return (
   <GoogleMap
     defaultZoom={13}
     defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
   />
 );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


function LeftComponent() {
  return(
    <div style={{width: '60vw', height: '100vh'}} >
 <div className="LeftComponent">
   {/* <div className="left-flex"> */}
    <WrappedMap
      googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyD8--ovOhB1SIgxHIpXhoZECQ0sOIpiMPg&callback=initMap"}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}  
    />
   </div>
 </div>
  )
}

export default LeftComponent;
