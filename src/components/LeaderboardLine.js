import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { getDominancePerc, getRankImage } from '../utility/Common.js';
import { max_scores } from '../data/levels'

class LeaderboardLine extends Component {
    render() {
        let { badge, eq_rank, global_score, username } = this.props; // id, rank

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td>{ getRankImage(ranks[badge]) }</td>
                <td>{ username }</td>
                <td>{ getDominancePerc(global_score/max_scores['global']) }</td>
            </tr>
        )
    }
}

export default LeaderboardLine;
