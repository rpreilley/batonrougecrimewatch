import React from 'react';
import Search from './search';
import RenderMap from './map';
import 'es6-promise';
import 'whatwg-fetch';

class Main extends React.Component {
  constructor(props){
    super(props);
    // The initial state.
    this.state = {
      crimes: [],
      defaultLat: 30.4583,
      defaultLng: -91.1403,
      zoom: 12
    }
  }
  _fetchCrime(crimeType) {
    // The Pace method below will render the "progress bar" when the fetch is initiated
    Pace.restart()
    fetch(`https://data.brla.gov/resource/5rji-ddnu.json?$limit=2000&$where=geolocation%20IS%20NOT%20NULL&crime=${crimeType}`)
      .then((response) => {
        // Pace method below once the data is gathered stops the "progress bar"
        Pace.stop()
        return response.json()
      })
      .then((results) => {
        // Setting the state of crimes to be the results of the fetch. This will be used as props in other components
        this.setState({
          crimes: results
        });
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  render(){
    return(
      <div className="mapContainer">
        <Search search={this._fetchCrime.bind(this)} />
        <RenderMap zoom={this.state.zoom} defaultLat={this.state.defaultLat} defaultLng={this.state.defaultLng} crimes={this.state.crimes} />
      </div>
    );
  }
}


export default Main;
