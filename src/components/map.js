import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class RenderMap extends React.Component {

  render(){
    if (this.props.coords) {
      for (var i = 0; i < this.props.coords.length; i++) {
        console.log(this.props.coords[i]);
      }
    }
    return(
    <div id="map">
      <GoogleMap
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        <Marker className="marker"></Marker>
      </GoogleMap>
    </div>
  )

  }
}


export default RenderMap;
