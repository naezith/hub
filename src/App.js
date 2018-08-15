import React, { Component } from 'react';
import './App.css';

//import Leaderboard from './components/Leaderboard.js';
import PlayerProfile from './components/PlayerProfile';

class App extends Component {
  constructor() {
    super();
    
    this.state = {}; 
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Remnants of Naezith Portal</h1>
        </header>

        <p className="App-intro">
          - This website is under construction -
        </p>

        <PlayerProfile />
      </div>
    );
  }
}

export default App;
