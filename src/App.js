import React, { Component } from 'react';
import Leaderboard from './components/Leaderboard.js';
import logo from './logo.svg';
import './App.css';

var fetch = require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    
    this.state = { 
      lb_start_rank: 0,
      lb_data: []
    }; 
    
    // Fetch Global Rankings
    ( async () => {
      const rawResponse = await fetch('/fetchGlobalRankings', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start_rank: this.state.lb_start_rank })
      });
      
      const content = await rawResponse.json();
    
      this.setState({
        lb_start_rank: 1,
        lb_data: content.lb_data
      });

      console.log(content);
    })();
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

        <Leaderboard lines={ this.state.lb_data }/>
      </div>
    );
  }
}

export default App;
