import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload)
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Sara Doe',
        email: 'sara@email.com',
        phone: '444-33-22'
      },
      {
        id: 2,
        name: 'John Lennon',
        email: 'john@email.com',
        phone: '555-44-33'
      },
      {
        id: 3,
        name: 'Jimmy Hendrix',
        email: 'jimmy@email.com',
        phone: '666-66-66'
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action))
    }
  };
  render() {
    return (
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
