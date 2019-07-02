import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  onInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  onSubmit = (e, dispatch) => {
    e.preventDefault();
    const {name, email, phone } = this.state;
    if (name === '') {
      this.setState({
        errors: {name: 'Name is required'}
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {email: 'Email is required'}
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: {phone: 'Phone is required'}
      });
      return;
    }
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact
    });
    this.setState({
      name:'',
      email:'',
      phone: '',
      errors: {}
    });
  };
  render() {
    const {name, email, phone, errors} = this.state;
    return  (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={(e) => this.onSubmit(e, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => this.onInput(e)}
                    error={errors.name}/>
                    <TextInputGroup
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => this.onInput(e)}
                      error={errors.email}/>
                    <TextInputGroup
                      label="Phone"
                      type ="phone"
                      name="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => this.onInput(e)}
                      error={errors.phone}/>
                  <input type="submit" className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default AddContact;
