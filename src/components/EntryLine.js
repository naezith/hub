import React, { Component } from 'react';
import { getDominancePerc, calcScore, getLevel, formatTime, formatRank } from '../utility/Common.js';

class EntryLine extends Component {
    render() {
        let { id, eq_rank, lb_size, official_time, time } = this.props; // rank

        return (
            <tr>
                <td>{ getLevel(id).name }</td>
                <td>{ formatTime(time) }</td>
                <td>{ formatTime(official_time) }</td>
                <td>{ formatRank(eq_rank, lb_size) }</td>
                <td>{ getDominancePerc(calcScore(eq_rank, lb_size), 'level', 2) }</td>
            </tr>
        )
    }
}

export default EntryLine;
