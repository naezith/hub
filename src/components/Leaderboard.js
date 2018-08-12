import React, { Component } from 'react';
import LeaderboardLine from "./LeaderboardLine.js";

class Leaderboard extends Component {

    render() { 
        let lines = this.props.lines;

        return(
            <table className="Leaderboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Dominance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lines.map((l, i) => 
                            <LeaderboardLine key={i} {...l} />
                        )
                    }
                </tbody>
            </table>
        )
}
    }

export default Leaderboard;
