import React, {Component, Fragment} from 'react';
import Contact from './Contact';
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          return (
            <Fragment>
              {contacts.map(({id, name, email, phone}) =>
                <Contact
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  phone={phone} />)}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;