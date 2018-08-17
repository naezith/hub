import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/Header.css'

export const Header = () => 
    <div className="header-div">
      <header className="header">
        <h1 className="header-title">Remnants of Naezith Hub</h1>
        <div className='header-menu'>
          <Link className='header-menu-link' to="/global-rankings">Global Rankings</Link>
          <Link className='header-menu-link' to="/world-records">World Records</Link> 
          <Link className='header-menu-link' to="/players">Search Players</Link> 
        </div>
      </header>
    </div>
