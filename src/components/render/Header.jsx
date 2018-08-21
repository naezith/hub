import React from 'react'
import { Link } from 'react-router-dom'

import { SteamLogin } from './SteamLogin'

import { navSelectedPage } from '../../utility/common'

export const Header = ({ user }) => 
    <header>
      <Link className='title' to='/'>
        <img className='header-icon' src='/img/naezith-icon.png' title={'naezith'} alt={'naezith'} />
        <h2>hub.naezith</h2>
      </Link>
      <ul>
        <li><Link className={navSelectedPage('/global-rankings', true)} to='/global-rankings'>Global Rankings</Link></li>
        <li><Link className={navSelectedPage('/world-records')} to='/world-records'>World Records</Link></li>
        <li><Link className={navSelectedPage('/players')} to='/players'>Search Players</Link></li>
      </ul>
      <SteamLogin user={user}/>
    </header>
    