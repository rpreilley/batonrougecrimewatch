import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import CrimeModal from './crime-modal';

class RenderMap extends React.Component {
  constructor(props){
    super(props);
    // Initial state of one selected crime as an empty object as well as making the value of showModal false at first //
    this.state = {
      selectedCrime: {},
      showModal: false
    }
  }
  // Setting state for selected crime and moving the value of showModal to true //
  selectCrime(crime) {
    this.setState({
      selectedCrime: crime,
      showModal: true
    })
  }
  // Resets the state of showModal to false so it will be removed from page //
  onHide() {
    this.setState({
      showModal: false
    })
  }
  render(){
    return(
    <div id="map">
      <GoogleMap
        // The zoon and center below are using the state that was set on the main component and using props to render the map to the center of Baton Rouge //
        // Below I map through the "crimes" object to get lat and lng of each result for the markers //
        zoom={this.props.zoom}
        center={ {lat: this.props.defaultLat, lng: this.props.defaultLng} }>
        { this.props.crimes.map((crime, i) => {
          if (crime.geolocation) {
            return (<Marker crime={crime} lat={crime.geolocation.coordinates[1]} lng={crime.geolocation.coordinates[0]} selectCrime={this.selectCrime.bind(this)} key={i}></Marker>)
          }
        })}
      </GoogleMap>
      <CrimeModal crime={this.state.selectedCrime} showModal={this.state.showModal} onHide={this.onHide.bind(this)}/>
    </div>
    // Sending the selectedCrime and onHide methods to the CrimeModal component, as well as the state of showModal //
  )

  }
}


export default RenderMap;
