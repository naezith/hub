import React from 'react'

import { LevelLink } from './LevelLink';
import { DateText } from './DateText';

import { calcDominance, calcScore } from '../../utility/calculations'
import { formatDominance, formatTime, formatRank } from '../../utility/formatters'

export const EntryLine = ({ id, rank, lb_size, official_time, time, update_date }) => 
    <tr>
        <td>{<LevelLink id={id}/>}</td>
        <td>{ formatTime(time) }</td>
        <td>{ formatTime(official_time) }</td>
        <td>{ formatRank(rank, lb_size) }</td>
        <td>{ formatDominance(calcDominance(calcScore(rank, lb_size), 'level'), 2) }</td>
        <td>{<DateText date={update_date}/>}</td>
    </tr>

