import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class RenderMap extends React.Component {

  render(){
    if (this.props.coords) {
      for (var i = 0; i < this.props.coords.length; i++) {
      }
    }
    return(
    <div id="map">
      <GoogleMap
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        { this.props.coords.map((coordsArray, i) => <Marker lat={coordsArray[1]} lng={coordsArray[0]} addTest={this.props.addTest.bind(this)} key={i}></Marker>) }
      </GoogleMap>
    </div>
  )

  }
}


export default RenderMap;
