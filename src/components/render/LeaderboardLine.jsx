import React from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'

import { formatDominance, formatDate, formatTime } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const LeaderboardLine = ({ player_id, badge, rank, global_score, 
                username, update_date, time, extra_value_func, obj }) => 
    <tr>
        <td>{ rank }</td>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><Link to={'/player/' + player_id}>{ username }</Link></td>
        { time ? <th>{formatTime(time)}</th> : undefined }
        { global_score ? <th>{formatDominance(calcDominance(global_score, 'global'))}</th> : undefined }
        { update_date ? <th>{formatDate(update_date)}</th> : undefined }
        { extra_value_func ? <td>{ extra_value_func(obj) }</td> : undefined }
    </tr>