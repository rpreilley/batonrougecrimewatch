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
              <option value="Assault">Assault</option>
              <option value="Battery">Battery</option>
              <option value="Criminal Damage to Property">Criminal Damage to Property</option>
              <option value="Firearm">Firearm</option>
              <option value="Homicide">Homicide</option>
              <option value="Individual Robbery">Individual Robbery</option>
              <option value="Juvenile">Juvenile</option>
              <option value="Narcotics">Narcotics</option>
              <option value="Non-Residential Burglary">Non-Residential Burglary</option>
              <option value="Nuisance">Nuisance</option>
              <option value="Residential Burglary">Residential Burglary</option>
              <option value="Theft">Theft</option>
              <option value="Vehicle Burglary">Vehicle Burglary</option>
              <option value="Vice">Vice</option>
              <option value="Other">Other</option>
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
