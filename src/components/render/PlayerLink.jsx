import React from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'
import { CountryIcon } from './CountryIcon'
import { SteamAvatar } from './SteamAvatar'

import { ranks } from '../../data/naezith'
import { isRon } from '../../utility/common'

export const PlayerLink = ({id, username, badge, steam_info, navSelected}) => 
    <Link className={navSelected} to={'/player/' + id}>
        <ul className='player-column'>
            { !isRon || badge === undefined ? undefined : <li><RankIcon name={ranks[badge]} /></li> }
            
            { steam_info && <li><SteamAvatar name={username} url={steam_info.avatarfull} /></li> }
            
            <li>{ username }</li> 
            
            { steam_info && steam_info.country_icon &&
                <li><CountryIcon name={steam_info.loccountrycode} url={steam_info.country_icon} /></li>}
        </ul>
    </Link>