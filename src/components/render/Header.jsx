import React from 'react'
import { Link } from 'react-router-dom'

import { SteamLogin } from './SteamLogin'

export const Header = ({ user }) => 
    <header>
      <img className='header-icon' src={require('../../img/naezith-icon.png')} title={'naezith'} alt={'naezith'} />
      <h2 className='title'>hub.naezith</h2>
      <ul className='nav'>
        <li><Link className='header-menu-link' to='/global-rankings'>Global Rankings</Link></li>
        <li><Link className='header-menu-link' to='/world-records'>World Records</Link></li>
        <li><Link className='header-menu-link' to='/players'>Search Players</Link></li>
      </ul>
      <SteamLogin user={user}/>
    </header>