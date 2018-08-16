import React, { Component } from 'react';
import { getDominancePerc, getRankImage, formatDate, steamProfile } from '../utility/Common.js';
import { ranks } from '../data/naezith.js'
import { Link } from 'react-router-dom'

class PlayersLine extends Component {
    render() {
        let { id, badge, global_score, username, register_date, steam_id } = this.props;

        return (
            <tr>
                <td>{ getRankImage(ranks[badge]) }</td>
                <td><Link to={'/player/' + id}>{ username }</Link></td>
                <td>{ getDominancePerc(global_score, 'global') }</td>
                <td>{ formatDate(register_date) }</td>
                <td>{ <a href={steamProfile(steam_id)}>Steam Profile</a> }</td>
            </tr>
        )
    }
}

export default PlayersLine;
