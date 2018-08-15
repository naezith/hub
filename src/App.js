import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
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

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/global">Global Rankings</Link></li>
          <li><Link to="/player">Player</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
