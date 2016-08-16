import React from 'react';
import Search from './search';
import RenderMap from './map';
import List from './list';
import ListItem from './list-item';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coords: [],
      defaultLat: 30.4583,
      defaultLng: -91.1403,
      zoom: 10
    }
  }
  _fetchCrime(crimeType) {
    fetch(`https://data.brla.gov/resource/5rji-ddnu.json`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let coords = [];
        // The console.log below is working and returns all of the results
        // console.log(results);
        results.forEach(function(result) {
          // A debugger here will trigger and if I type in crimeType it knows what the value is from the dropdown menu
          if (result.crime == crimeType && result.geolocation) {
            // I am trying to get it to hit this part and console.log the results based off of the crimeType from the dropdown menu //
            // It is not getting to the step below
            coords.push(result.geolocation.coordinates);
          }
        })
        this.setState({
          coords: coords
        })
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  _clearDisplays(){
    this.setState({displayListItems: []});
    this.setState({coords: []});
  }
  render(){
    return(
      <div className="mapContainer">
        <Search search={this._fetchCrime.bind(this)} clear={this._clearDisplays.bind(this)}/>
        <RenderMap zoom={this.state.zoom} defaultLat={this.state.defaultLat} defaultLng={this.state.defaultLng} coords={this.state.coords}  />
        <List />
        <ListItem display={this.state.displayListItems} />
      </div>
    );
  }
}


export default Main;
