import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  toggleVisible = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({
      type:'DELETE_CONTACT',
      payload: id
    })
  };
  render() {
    const {id, name, email, phone} = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className='card card-body mb-3'>
              <h4>
                {name}{' '}
                <i className="fas fa-sort-down cursor-pointer" onClick={this.toggleVisible}/>
                <i className="fas fa-times cursor-pointer delete-icon" onClick={() => this.onDeleteClick(id, dispatch)} />
              </h4>
              {showContactInfo ? (<ul className='list-group'>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
              </ul>) : null }

            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
