import React from 'react'

import { PlayerLink } from './PlayerLink'
import { SteamProfile } from './SteamProfile'
import { DateText } from './DateText'
import { LevelLink } from './LevelLink'

import { formatDominance, formatTime, formatRank } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'

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
        { player_id === undefined ? undefined : 
            <td><PlayerLink id={player_id} username={username} badge={badge} steam_info={steam_info} /></td>}
        { score === undefined ? undefined : 
            <td>{formatDominance(calcDominance(score, dominance_scale), dominance_precision)}</td> }
        { time === undefined ? undefined : 
            <td>{formatTime(time)}</td> }
        { official_time === undefined ? undefined : 
            <td className={time <= official_time ? 'passed-mastery' : 'no-mastery'}>
                {formatTime(official_time)}</td> }
        { lb_rank === undefined ? undefined : 
            <td>{formatRank(lb_rank, lb_size)}</td> }
        { update_date === undefined ? undefined : 
            <td>{<DateText date={update_date}/>}</td> }
        { extra_value_func === undefined ? undefined : 
            <td>{ extra_value_func(obj) }</td> }
        { steam_id === undefined ? undefined : 
            <td><SteamProfile id={steam_id} /></td> }
    </tr>