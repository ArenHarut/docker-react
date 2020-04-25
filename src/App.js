import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Club</h2>
          <h4>Important message</h4>
        </div>
        <p className="App-intro">
          To get started, you should repeat everything you see during video tutorials
        </p>
      </div>
    );
  }
}

export default App;
