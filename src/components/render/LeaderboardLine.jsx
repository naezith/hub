import React from 'react'

import { PlayerLink } from './PlayerLink';
import { RankIcon } from './RankIcon'
import { SteamProfile } from './SteamProfile'
import { DateText } from './DateText';
import { LevelLink } from './LevelLink';

import { formatDominance, formatTime, formatRank } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const LeaderboardLine = ({ level_id, steam_id, player_id, badge, rank, score, 
                username, update_date, time, 
                official_time, lb_rank, lb_size, dominance_scale='global', dominance_precision=3, // Player profile stuff
                extra_value_func, obj }) => 
    <tr>
        { rank !== undefined ? <td>{rank}</td> : undefined }
        { level_id !== undefined ? <td>{<LevelLink id={level_id}/>}</td> : undefined }
        { badge !== undefined ? <td><RankIcon name={ranks[badge]} /></td> : undefined }
        { player_id !== undefined ? <td><PlayerLink id={player_id} username={username}/></td> : undefined }
        { score !== undefined ? <td>{formatDominance(calcDominance(score, dominance_scale), dominance_precision)}</td> : undefined }
        { time !== undefined ? <td>{formatTime(time)}</td> : undefined }
        { official_time !== undefined ? <td>{formatTime(official_time)}</td> : undefined }
        { lb_rank !== undefined ? <td>{formatRank(lb_rank, lb_size)}</td> : undefined }
        { update_date !== undefined ? <td>{<DateText date={update_date}/>}</td> : undefined }
        { extra_value_func !== undefined ? <td>{ extra_value_func(obj) }</td> : undefined }
        { steam_id !== undefined ? <td><SteamProfile id={steam_id} inside={'Steam Profile'} /></td> : undefined }
    </tr>