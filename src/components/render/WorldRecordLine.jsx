import React from 'react'

import { RankIcon } from './RankIcon'
import { PlayerLink } from './PlayerLink';
import { LevelLink } from './LevelLink';

import { calcDominance } from '../../utility/calculations'
import { formatDominance, formatTime, formatDate } from '../../utility/formatters'
import { ranks } from '../../data/naezith'

export const WorldRecordLine = ({ level_id, player_id, badge, username, global_score, time, update_date }) => 
    <tr>
        <td>{<LevelLink id={level_id}/>}</td>
        <td>{ formatTime(time) }</td>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><PlayerLink id={player_id} username={username}/></td>
        <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
        { update_date ? <th>{formatDate(update_date)}</th> : undefined }
    </tr>

