import React from 'react'

import { LevelLink } from './LevelLink';

import { calcDominance, calcScore } from '../../utility/calculations'
import { formatDominance, formatTime, formatRank } from '../../utility/formatters'

export const EntryLine = ({ id, rank, lb_size, official_time, time }) => 
    <tr>
        <td>{<LevelLink id={id}/>}</td>
        <td>{ formatTime(time) }</td>
        <td>{ formatTime(official_time) }</td>
        <td>{ formatRank(rank, lb_size) }</td>
        <td>{ formatDominance(calcDominance(calcScore(rank, lb_size), 'level'), 2) }</td>
    </tr>

