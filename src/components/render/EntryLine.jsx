import React from 'react'

import { getLevel } from '../../utility/ron-hub'
import { calcDominance, calcScore } from '../../utility/calculations'
import { formatDominance, formatTime, formatRank } from '../../utility/formatters'

export const EntryLine = ({ id, eq_rank, lb_size, official_time, time }) => 
    <tr>
        <td>{ getLevel(id).name }</td>
        <td>{ formatTime(time) }</td>
        <td>{ formatTime(official_time) }</td>
        <td>{ formatRank(eq_rank, lb_size) }</td>
        <td>{ formatDominance(calcDominance(calcScore(eq_rank, lb_size), 'level'), 2) }</td>
    </tr>

