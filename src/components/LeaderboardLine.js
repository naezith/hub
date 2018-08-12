import React, { Component } from 'react';

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

let rank_images = '/img/ranks/';

class LeaderboardLine extends Component {
    getRankImage = (name) => ( <img src={rank_images + name + '.png'} alt={name} /> )
    

    render() {
        let { badge, eq_rank, global_score, username } = this.props; // id, rank

        return (
            <tr>
                <td>{ eq_rank }</td>
                <td>{ this.getRankImage(ranks[badge]) }</td>
                <td>{ username }</td>
                <td>{ parseFloat(100*global_score/max_score).toFixed(3) }%</td>
            </tr>
        )
    }
}

export default LeaderboardLine;
