import React from 'react';


class Search extends React.Component {

  constructor(props){
    super(props);
  }
  _handleSearch(event) {
    // Prevents refresh of page
    event.preventDefault();
    // Sends the value of the dropdown menu to be used in the API call as the "crimeType"
    this.props.search(this.refs.chosenCrime.value);
  }
  render(){
    return(
      <div className="searchSection">
        <div className="crimeList">
          <h3>Select Crime</h3>
            <select ref="chosenCrime" className="chosenCrime">
              <option value="ASSAULT">Assault</option>
              <option value="BATTERY">Battery</option>
              <option value="CRIMINAL DAMAGE TO PROPERTY">Criminal Damage to Property</option>
              <option value="FIREARM">Firearm</option>
              <option value="HOMICIDE">Homicide</option>
              <option value="INDIVIDUAL ROBBERY">Individual Robbery</option>
              <option value="NARCOTICS">Narcotics</option>
              <option value="NON-RESIDENTIAL BURGLARY">Non-Residential Burglary</option>
              <option value="NUISANCE">Nuisance</option>
              <option value="RESIDENTIAL BURGLARY">Residential Burglary</option>
              <option value="THEFT">Theft</option>
              <option value="VEHICLE BURGLARY">Vehicle Burglary</option>
              <option value="VICE">Vice</option>
              <option value="OTHER">Other</option>
            </select>
        </div>
        <div>
          <form onSubmit={this._handleSearch.bind(this)}>
            <button type="submit" value="Search" className="btn btn-secondary searchButton">Search</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Search;
