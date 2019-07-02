import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  onSubmit = (e, dispatch) => {
    e.preventDefault();
    const {name, email, phone } = this.state;
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
      phone: ''
    });
  };
  render() {
    const {name, email, phone} = this.state;
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
                    onChange={(e) => this.onInput(e)} />
                    <TextInputGroup
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => this.onInput(e)} />
                    <TextInputGroup
                      label="Phone"
                      type ="phone"
                      name="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => this.onInput(e)} />
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
