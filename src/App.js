import React, {Component} from 'react';

import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Contact manager'/>
        <Contact name='John Doe' email='john@email.com' phone='555-44-33'/>
      </div>
    )
  }
}

export default App;
