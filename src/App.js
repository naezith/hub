import React, { Component } from 'react';
import Leaderboard from './components/Leaderboard.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {}; 
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Remnants of Naezith HUB</h1>
        </header>

        <p className="App-intro">
          - This website is under construction -
        </p>

        <Leaderboard />
      </div>
    );
  }
}

export default App;
