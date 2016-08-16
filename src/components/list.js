import React from 'react';
import ListItem from './list-item';


class List extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="list">
        <h3> Events </h3>
      </div>
    );
  }
}


export default List;
