import React, { Component } from 'react';

class LeaderboardLine extends Component {
    render() {
        let { badge, eq_rank, global_score, username } = this.props; // id, rank
        let max_score = 10000;
        let ranks = [
            'Novice',
            'Apprentice',
            'Adept',
            'Veteran',
            'Expert',
            'Master',
            'Grandmaster',
            'Inhuman',
            'Descendant'
        ];

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td>{ ranks[badge] }</td>
                <td>{ username }</td>
                <td>{ parseFloat(100*global_score/max_score).toFixed(3) }%</td>
            </tr>
        )
    }
}

export default LeaderboardLine;
