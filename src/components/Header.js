import React, { Component } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <header className="header">
          <h1 className="header-title">Remnants of Naezith Hub</h1>
          <div className='header-menu'>
            <Link className='header-menu-link' to="/global-rankings">Global Rankings</Link>
            <Link className='header-menu-link' to="/recent-wr">Recent World Records</Link> 
            <Link className='header-menu-link' to="/levels">Levels</Link> 
            <Link className='header-menu-link' to="/players">Search Players</Link> 
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
