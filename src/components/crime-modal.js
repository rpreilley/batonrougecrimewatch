import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class CrimeModal extends React.Component {
  constructor(props){
    super(props);
  }
  close() {
    this.props.onHide();
  }
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className="modalBody">Crime Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            // Rendering the specific data on lines within the modal for each marker when one is clicked
            // If the props of the crime exist it shows in the modal, otherwise it shows nothing.
            // Did this because some crime objects dont have all the data you need, so without that piece it would break
            <h4>Crime Type: {this.props.crime ? this.props.crime.crime : ""}</h4>
            <h4>Attempted or Committed: {this.props.crime ? this.props.crime.a_c : ""}</h4>
            <h4>Offense Description: {this.props.crime ? this.props.crime.offense_desc : ""}</h4>
            <h4>Address: {this.props.crime ? this.props.crime.address : ""}</h4>
            <h4>City: {this.props.crime ? this.props.crime.city : ""}</h4>
            <h4>State: {this.props.crime ? this.props.crime.state : ""}</h4>
            <h4>Latitude: {this.props.crime.geolocation ? this.props.crime.geolocation.coordinates[1] : ""}</h4>
            <h4>Longitude: {this.props.crime.geolocation ? this.props.crime.geolocation.coordinates[0] : ""}</h4>
            <h4>Complete District: {this.props.crime ? this.props.crime.complete_district : ""}</h4>
            <h4>File Number: {this.props.crime ? this.props.crime.file_number : ""}</h4>
            <h4>Offense: {this.props.crime ? this.props.crime.offense : ""}</h4>
            <h4>Offense Date: {this.props.crime ? this.props.crime.offense_date : ""}</h4>
            <h4>Offense Time: {this.props.crime ? this.props.crime.offense_time : ""}</h4>
            <button type="button" className="btn btn-secondary searchButton"><a href="mailto:email@example.com?subject=Crime Information&body=">Email Crime Information</a></button>
          </Modal.Body>
        </Modal>
    );
  }
}

export default CrimeModal;
