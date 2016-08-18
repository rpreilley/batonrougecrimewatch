import React from 'react';


class Marker extends React.Component {
  constructor(props){
    super(props);
  }
  _handleClick(event){
    // On click of a marker it evokes the selectCrime method that was passed to this component from the Map component as state.
    this.props.selectCrime(this.props.crime);
  }
  render(){
    return(
      <div>
       <i onClick={this._handleClick.bind(this)} className="fa fa-map-marker fa 4x" aria-hidden="true"></i>
      </div>
    );
  }
}


export default Marker;
