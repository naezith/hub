import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'

import { formatDominance } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export class LeaderboardLine extends Component {
    render() {
        let { id, badge, eq_rank, global_score, username } = this.props // rank

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td><RankIcon name={ranks[badge]} /></td>
                <td><Link to={'/player/' + id}>{ username }</Link></td>
                <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
            </tr>
        )
    }
}