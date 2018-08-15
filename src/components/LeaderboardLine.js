import React, { Component } from 'react';
import { getDominancePerc, getRankImage } from '../utility/Common.js';
import { ranks } from '../data/levels'

class LeaderboardLine extends Component {
    render() {
        let { badge, eq_rank, global_score, username } = this.props; // id, rank

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td>{ getRankImage(ranks[badge]) }</td>
                <td>{ username }</td>
                <td>{ getDominancePerc(global_score, 'global', 3) }</td>
            </tr>
        )
    }
}

export default LeaderboardLine;
