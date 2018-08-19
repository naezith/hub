import React from 'react'
import { Link } from 'react-router-dom'

import { PlayerLink } from './render/PlayerLink';

import '../css/SteamLogin.css'

export const SteamLogin = ({user}) =>
( user === undefined ?  
        <Link to={'/steam'}>Login with Steam</Link> :
        <div>
            <ul>
                <li><img src={user.avatarfull} alt={user.personaname}/></li> 
                <li>{<PlayerLink id={user.steamid} username={user.personaname}/>}</li>
                <li>{<Link to={'/steam/logout'}>Logout</Link>}</li>
            </ul>
        </div>
)

/*
avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg"
avatarfull:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"
avatarmedium:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"
commentpermission:"2"
communityvisibilitystate:"1"
lastlogoff:"1521973305"
personaname:"nae"
personastate:"0"
profilestate:"1"
profileurl:"https://steamcommunity.com/profiles/76561198796210443/"
steamid:"76561198796210443"
*/