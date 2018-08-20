import React from 'react'

import { PlayerLink } from './PlayerLink';
import { RankIcon } from './RankIcon'
import { SteamProfile } from './SteamProfile'
import { DateText } from './DateText';
import { LevelLink } from './LevelLink';
import { CountryIcon } from './CountryIcon';

import { formatDominance, formatTime, formatRank } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'
import { SteamAvatar } from './SteamAvatar';

import '../../css/LeaderboardLine.css'

export const LeaderboardLine = ({ level_id, steam_id, steam_info, player_id, badge, rank, score, 
                username, update_date, time, 
                official_time, lb_rank, lb_size, dominance_scale='global', dominance_precision=3, // Player profile stuff
                extra_value_func, obj }) => 
    <tr>
        { rank === undefined ? undefined : 
            <td>{rank}</td> }
        { level_id === undefined ? undefined : 
            <td>{<LevelLink id={level_id}/>}</td> }
        { badge === undefined ? undefined : 
            <td><RankIcon name={ranks[badge]} /></td> }
        { player_id === undefined ? undefined : 
            <td className='player-column'>
                <ul>
                {steam_info === undefined ? undefined :
                    <li><SteamAvatar name={username} url={steam_info.avatar} /></li>}
                <li><PlayerLink id={player_id} username={username}/></li> 
                {steam_info === undefined || steam_info.country_icon === undefined ? undefined :
                    <li><CountryIcon name={steam_info.loccountrycode} url={steam_info.country_icon} /></li>}
                </ul>
            </td>}
        { score === undefined ? undefined : 
            <td>{formatDominance(calcDominance(score, dominance_scale), dominance_precision)}</td> }
        { time === undefined ? undefined : 
            <td>{formatTime(time)}</td> }
        { official_time === undefined ? undefined : 
            <td>{formatTime(official_time)}</td> }
        { lb_rank === undefined ? undefined : 
            <td>{formatRank(lb_rank, lb_size)}</td> }
        { update_date === undefined ? undefined : 
            <td>{<DateText date={update_date}/>}</td> }
        { extra_value_func === undefined ? undefined : 
            <td>{ extra_value_func(obj) }</td> }
        { steam_id === undefined ? undefined : 
            <td><SteamProfile id={steam_id} /></td> }
    </tr>