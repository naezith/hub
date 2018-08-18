import React from 'react'

import { RankIcon } from './RankIcon'
import { SteamProfile } from './SteamProfile'
import { PlayerLink } from './PlayerLink';
import { DateText } from './DateText';

import { formatDominance } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const PlayersLine = ({ id, badge, global_score, username, register_date, steam_id }) => (
    <tr>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><PlayerLink id={id} username={username}/></td>
        <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
        <td>{<DateText date={register_date}/>}</td>
        <td><SteamProfile id={steam_id} inside={'Steam Profile'} /></td>
    </tr>
)
