import React from 'react'
import { Link } from 'react-router-dom'

import { PlayerLink } from './PlayerLink'

import { navSelectedPage } from '../../utility/common'

export const SteamLogin = ({user}) => 
    user === undefined ?  
        <Link className='nav-profile' to={'/steam'}><img src='/img/steam/sits_01.png' alt='Login with Steam'/></Link>
            :
        <PlayerLink navSelected={'nav-profile ' + navSelectedPage('/player/' + user.steamid)} 
                            id={user.steamid} username={user.personaname} steam_info={user} />
        
/*
{
      "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3c/3c053319176594760e26c99ad516276e6b694e2a.jpg",
      "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3c/3c053319176594760e26c99ad516276e6b694e2a_full.jpg",
      "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3c/3c053319176594760e26c99ad516276e6b694e2a_medium.jpg",
      "commentpermission": "1",
      "communityvisibilitystate": "3",
      "lastlogoff": "1534853595",
      "loccountrycode": "TR",
      "locstatecode": "34",
      "personaname": "naezith",
      "personastate": "0",
      "personastateflags": "0",
      "primaryclanid": "103582791456604229",
      "profilestate": "1",
      "profileurl": "https://steamcommunity.com/id/naezith/",
      "realname": "Tolga",
      "steamid": "76561198013519231",
      "timecreated": "1252497008"
    }
*/