import React from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'
import { CountryIcon } from './CountryIcon'
import { SteamAvatar } from './SteamAvatar'

import { ranks } from '../../data/naezith'

export const PlayerLink = ({id, username, badge, steam_info}) => 
    (<ul className='player-column'>
        { badge === undefined ? undefined : 
            <li><RankIcon name={ranks[badge]} /></li> }
        {steam_info === undefined ? undefined :
            <li><SteamAvatar name={username} url={steam_info.avatar} /></li>}
        <li><Link to={'/player/' + id}>{ username }</Link></li> 
        {steam_info === undefined || steam_info.country_icon === undefined ? undefined :
            <li><CountryIcon name={steam_info.loccountrycode} url={steam_info.country_icon} /></li>}
    </ul>) 
    