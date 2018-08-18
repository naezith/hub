import React from 'react'

import { RankIcon } from './RankIcon'
import { PlayerLink } from './PlayerLink';

import { getLevel } from '../../utility/ron-hub'
import { calcDominance } from '../../utility/calculations'
import { formatDominance, formatTime } from '../../utility/formatters'
import { ranks } from '../../data/naezith'

export const WorldRecordLine = ({ level_id, player_id, badge, username, global_score, time }) => 
    <tr>
        <td>{ getLevel(level_id).name }</td>
        <td>{ formatTime(time) }</td>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><PlayerLink id={player_id} username={username}/></td>
        <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
    </tr>

