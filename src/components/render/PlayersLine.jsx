import React from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'
import { SteamProfile } from './SteamProfile'

import { formatDominance, formatDate } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const PlayersLine = ({ id, badge, global_score, username, register_date, steam_id }) => (
    <tr>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><Link to={'/player/' + id}>{ username }</Link></td>
        <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
        <td>{ formatDate(register_date) }</td>
        <td><SteamProfile id={steam_id} inside={'Steam Profile'} /></td>
    </tr>
)
