import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class RenderMap extends React.Component {

  render(){
    if (this.props.coords) {
      // let Marker = [];
      for (var i = 0; i < this.props.coords.length; i++) {
        // Marker.push(this.props.coords[i]);
        console.log(this.props.coords[i][1]);
        // This console log is logging a bunch of arrays each with 2 index points, lat and lng
        // I want to place a marker for each one as it is iterating through the for loop
      }
    }
    // The Marker that is hard coded below is rendering on the map.
    // Need to figure out how to take iteration of lat lng's above and put a marker for each of them so it is not hard coded
    return(
    <div id="map">
      <GoogleMap
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        { this.props.coords.map((coordsArray, i) => <Marker lat={coordsArray[1]} lng={coordsArray[0]} key={i}></Marker>) }
      </GoogleMap>
    </div>
  )

  }
}


export default RenderMap;
