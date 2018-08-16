import React, { Component } from 'react';
import { getDominancePerc, getRankImage } from '../utility/Common.js';
import { ranks } from '../data/naezith.js'
import { Link } from 'react-router-dom'

class LeaderboardLine extends Component {
    render() {
        let { id, badge, eq_rank, global_score, username } = this.props; // rank

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td>{ getRankImage(ranks[badge]) }</td>
                <td><Link to={'/player/' + id}>{ username }</Link></td>
                <td>{ getDominancePerc(global_score, 'global') }</td>
            </tr>
        )
    }
}

export default LeaderboardLine;
