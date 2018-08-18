import React from 'react'

import { LevelLink } from './LevelLink';

import { calcDominance, calcScore } from '../../utility/calculations'
import { formatDominance, formatTime, formatRank, formatDate } from '../../utility/formatters'

export const EntryLine = ({ id, rank, lb_size, official_time, time, update_date }) => 
    <tr>
        <td>{<LevelLink id={id}/>}</td>
        <td>{ formatTime(time) }</td>
        <td>{ formatTime(official_time) }</td>
        <td>{ formatRank(rank, lb_size) }</td>
        <td>{ formatDominance(calcDominance(calcScore(rank, lb_size), 'level'), 2) }</td>
        { update_date ? <th>{formatDate(update_date)}</th> : undefined }
    </tr>

