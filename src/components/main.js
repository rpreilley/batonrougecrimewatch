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
      file_number: [],
      offense_date: [],
      offense_time: [],
      crime: [],
      a_c: [],
      offense: [],
      offense_desc: [],
      address: [],
      complete_district: [],
      defaultLat: 30.4583,
      defaultLng: -91.1403,
      zoom: 12
    }
  }
  _fetchCrime(crimeType) {
    fetch(`https://data.brla.gov/resource/5rji-ddnu.json`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let coords = [];
        let file_number = [];
        let offense_date = [];
        let offense_time = [];
        let crime = [];
        let a_c = [];
        let offense = [];
        let offense_desc = [];
        let address = [];
        let complete_district = [];

        results.forEach(function(result) {
          if (result.crime == crimeType && result.offense_date.includes("2016") && result.geolocation) {
            coords.push(result.geolocation.coordinates);
            file_number.push(result.file_number);
            offense_date.push(result.offense_date);
            offense_time.push(result.offense_time);
            crime.push(result.crime);
            a_c.push(result.a_c);
            offense.push(result.offense);
            offense_desc.push(result.offense_desc);
            address.push(result.address);
            complete_district.push(result.complete_district);
          }
        })
        this.setState({
          coords: coords,
          file_number: file_number,
          offense_date: offense_date,
          offense_time: offense_time,
          crime: crime,
          a_c: a_c,
          offense: offense,
          offense_desc: offense_desc,
          address: address,
          complete_district: complete_district
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
  _addToList(){
    console.log("firing off");
    this.setState({file_number: file_number})
  }
  render(){
    return(
      <div className="mapContainer">
        <Search search={this._fetchCrime.bind(this)} clear={this._clearDisplays.bind(this)}/>
        <RenderMap zoom={this.state.zoom} defaultLat={this.state.defaultLat} defaultLng={this.state.defaultLng} addTest={this._addToList.bind(this)} coords={this.state.coords} />
        <List />
        <ListItem list={this.state.file_number} />
      </div>
    );
  }
}


export default Main;
