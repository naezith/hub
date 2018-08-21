import React from 'react'
import { Link } from 'react-router-dom'

import { PlayerLink } from './PlayerLink'

import { navSelectedPage } from '../../utility/common'

export const SteamLogin = ({user}) => 
    user === undefined ?  
        <ul className='steam'>
            <li className='login-with-steam'><Link to={'/steam'}><img src='/img/steam/sits_01.png' alt='Login with Steam'/></Link></li>
        </ul>    
            :
        <ul className='steam'>
            <li>{<PlayerLink navSelected={navSelectedPage('/player/' + user.steamid)} 
                            id={user.steamid} username={user.personaname} steam_info={user} />}</li>
            <li>{<Link to={'/steam/logout'}>Logout</Link>}</li>
        </ul>
        
/*
avatar:'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg'
avatarfull:'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg'
avatarmedium:'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg'
commentpermission:'2'
communityvisibilitystate:'1'
lastlogoff:'1521973305'
personaname:'nae'
personastate:'0'
profilestate:'1'
profileurl:'https://steamcommunity.com/profiles/76561198796210443/'
steamid:'76561198796210443'
*/