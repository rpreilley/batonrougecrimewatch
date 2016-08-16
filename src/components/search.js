import React from 'react';


class Search extends React.Component {

  constructor(props){
    super(props);
  }
  _handleSearch(event) {
    event.preventDefault();
    this.props.search(this.refs.chosenCrime.value);
    this.props.clear();
  }
  render(){
    return(
      <div className="searchSection">
        <div>
          <p>Type of Crime </p>
            <select ref="chosenCrime" defaultValue={0}>
              <option value="ASSAULT">Assault</option>
              <option value="BATTERY">Battery</option>
              <option value="CRIMINAL DAMAGE TO PROPERTY">Criminal Damage to Property</option>
              <option value="FIREARM">Firearm</option>
              <option value="HOMICIDE">Homicide</option>
              <option value="INDIVIDUAL ROBBERY">Individual Robbery</option>
              <option value="JUVENILE">Juvenile</option>
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
        <div className="search">
          <form onSubmit={this._handleSearch.bind(this)}>
          <input type="submit" value="Search" className="searchButton"/>
          </form>
        </div>
      </div>
    );
  }
}


export default Search;
