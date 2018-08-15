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
          <div className='header-menu'>
            <Link className='header-menu-link' to="/global-rankings">Global Rankings</Link>
            <Link className='header-menu-link' to="/recent-wr">Recent World Records</Link> 
            <Link className='header-menu-link' to="/levels">Levels</Link> 
            <Link className='header-menu-link' to="/players">Search Players</Link> 
          </div>
        </header>

        <p className="App-intro">
          - This website is under construction -
        </p>

      </div>
    );
  }
}

export default App;
