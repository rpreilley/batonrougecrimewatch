import React from 'react';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.file_number.map(function(file_number, i) {
          return
          <div className="eventBar">
            <li>{file_number} key={i}</li>
          </div>
        })
        }
      </ul>
    );
  }
}


export default ListItem;
