import React from 'react'

import { PlayerLink } from './PlayerLink';
import { RankIcon } from './RankIcon'
import { DateText } from './DateText';

import { formatDominance, formatTime } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const LeaderboardLine = ({ player_id, badge, rank, global_score, 
                username, update_date, time, extra_value_func, obj }) => 
    <tr>
        <td>{ rank }</td>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><PlayerLink id={player_id} username={username}/></td>
        { time ? <td>{formatTime(time)}</td> : undefined }
        { global_score ? <td>{formatDominance(calcDominance(global_score, 'global'))}</td> : undefined }
        { update_date ? <td>{<DateText date={update_date}/>}</td> : undefined }
        { extra_value_func ? <td>{ extra_value_func(obj) }</td> : undefined }
    </tr>