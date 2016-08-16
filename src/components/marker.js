import React from 'react';


class Marker extends React.Component {
  constructor(props){
    super(props);
  }
  _handleClick(event){
    debugger
    this.props.addTest(this.props.file_number);
  }
  render(){
    return(
      <div>
       <i onClick={this._handleClick.bind(this)} className="fa fa-map-marker fa" aria-hidden="true"></i>
      </div>
    );
  }
}


export default Marker;
