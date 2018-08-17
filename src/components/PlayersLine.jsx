import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RankIcon from './RankIcon'

import { formatDominance, formatDate } from '../utility/formatters'
import { calcDominance } from '../utility/calculations'
import SteamProfile from './SteamProfile'
import { ranks } from '../data/naezith'

class PlayersLine extends Component {
    render() {
        let { id, badge, global_score, username, register_date, steam_id } = this.props

        return (
            <tr>
                <td><RankIcon name={ranks[badge]} /></td>
                <td><Link to={'/player/' + id}>{ username }</Link></td>
                <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
                <td>{ formatDate(register_date) }</td>
                <td><SteamProfile id={steam_id} inside={'Steam Profile'} /></td>
            </tr>
        )
    }
}

export default PlayersLine
