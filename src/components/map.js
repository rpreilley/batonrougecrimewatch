import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class RenderMap extends React.Component {

  render(){
    if (this.props.coords) {
      // let Marker = [];
      for (var i = 0; i < this.props.coords.length; i++) {
        // Marker.push(this.props.coords[i]);
        console.log(this.props.coords[i]);
        // This console log is logging arrays each with 2 index points, lat and lng
        // I want to place a marker for each one as it is iterating through the for loop
      }
    }
    return(
    <div id="map">
      <GoogleMap
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        <Marker lat={30.51542} lng={-91.162719}></Marker>
        {Marker}
      </GoogleMap>
    </div>
  )

  }
}


export default RenderMap;
