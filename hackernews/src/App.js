import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const user = {
      'firstname': 'Kirill',
      'lastname': 'Kimson'
    }
    return (
      <div className="App">
        <h2>Hello, {user.firstname} {user.lastname}!</h2>
      </div>
    );
  }
}

export default App;
