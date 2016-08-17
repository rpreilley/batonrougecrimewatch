import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import CrimeModal from './crime-modal';

class RenderMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCrime: {},
      showModal: false
    }
  }
  selectCrime(crime) {
    this.setState({
      selectedCrime: crime,
      showModal: true
    })
  }
  onHide() {
    this.setState({
      showModal: false
    })
  }
  render(){
    return(
    <div id="map">
      <GoogleMap
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        { this.props.crimes.map((crime, i) => {
          if (crime.geolocation) {
            return (<Marker crime={crime} lat={crime.geolocation.coordinates[1]} selectCrime={this.selectCrime.bind(this)} lng={crime.geolocation.coordinates[0]} key={i}></Marker>)
          }
        })}
      </GoogleMap>
      <CrimeModal crime={this.state.selectedCrime} showModal={this.state.showModal} onHide={this.onHide.bind(this)}/>
    </div>
  )

  }
}


export default RenderMap;
