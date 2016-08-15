import React from 'react';


class Search extends React.Component {

  constructor(props){
    super(props);
  }

  _handleSearch(event) {
    event.preventDefault();
    this.props.search(this.refs.Search.value);
    this.props.clear();

  }
  render(){
    return(
      <form onSubmit={this._handleSearch.bind(this)}>
        <input type="search" ref="Search"/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}


export default Search;
