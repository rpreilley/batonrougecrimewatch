import React from 'react';
import Search from './search';
import RenderMap from './map';
import 'es6-promise';
import 'whatwg-fetch';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      crimes: [],
      defaultLat: 30.4583,
      defaultLng: -91.1403,
      zoom: 12
    }
  }
  _fetchCrime(crimeType) {
    fetch(`https://data.brla.gov/resource/5rji-ddnu.json?$limit=1000&$where=geolocation%20IS%20NOT%20NULL&crime=${crimeType}`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
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
