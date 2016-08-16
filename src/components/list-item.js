import React from 'react';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.list.map(function(listValue, j) {
          return <div className="eventBar" key={j}><li>{listValue}</li></div>
        })
        }
      </div>
    );
  }
}


export default ListItem;
