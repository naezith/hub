import React from 'react'
import { Link } from 'react-router-dom'

import { SteamLogin } from './SteamLogin'

import '../../css/Header.css'

export const Header = ({ user }) => 
    <header className="header">
      <h2 className="header-title">hub.naezith</h2>
      <ul className='header-menu'>
        <li><Link className='header-menu-link' to="/global-rankings">Global Rankings</Link></li>
        <li><Link className='header-menu-link' to="/world-records">World Records</Link></li>
        <li><Link className='header-menu-link' to="/players">Search Players</Link></li>
      </ul>
      <SteamLogin user={user}/>
    </header>