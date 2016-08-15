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

  }
  componentDidMount() {
    fetch(`https://data.brla.gov/resource/5rji-ddnu.json`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let coords = [];
        results.forEach(function(result) {
          if (result.crime == "HOMICIDE" && result.geolocation) {
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
  render(){
    return(
      <div className="mapContainer">
        <DropDown />
        <Search />
        <RenderMap zoom={this.state.zoom} defaultLat={this.state.defaultLat} defaultLng={this.state.defaultLng} coords={this.state.coords}  />
        <List />
        <ListItem display={this.state.displayListItems} />
      </div>
    );
  }
}


export default Main;
