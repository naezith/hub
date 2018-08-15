import React, { Component } from 'react';
import LeaderboardLine from "./LeaderboardLine.js";
import { fetch } from 'isomorphic-fetch';

var line_count = 10;

class Leaderboard extends Component {
    constructor() {
        super();
        this.state = {
            start_rank: 0,
            lines: [],
            loading: true,
            error_msg: undefined
        };
    }

    componentWillMount() {
        this.fetchGlobalRankings(this.state.start_rank);
    }

    fetchGlobalRankings(req_state_rank) {
        // Fetch Global Rankings
        ( async () => {
            const rawResponse = await fetch('/fetchGlobalRankings', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ start_rank: req_state_rank })
            });

            var success = true;
            const content = await rawResponse.json().catch((e) => { 
                console.log('Fetched data is corrupted, probably server is down', e); 
                success = false; 
            });

            if(!success || !content || !content.lb_data) 
                this.setState({ 
                    loading: false, 
                    error_msg: 'The game server is down'
                });
            else 
                this.setState({
                    start_rank: req_state_rank,
                    lines: content.lb_data || [],
                    loading: false,
                    error_msg: undefined
                });
        })();
    }

    changePage(event, tag){
        event.preventDefault();
        this.setState({
            loading: true
        });

        this.fetchGlobalRankings(this.state.start_rank + 
            (tag === 'previous' ? -line_count : line_count));
    }

    render() { 
        return(
            <div>
                <h1>Global Rankings</h1>
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
                            this.state.lines.map((l, i) => 
                                <LeaderboardLine key={i} {...l} />
                            )
                        }
                    </tbody>
                </table>

                {this.state.start_rank >= line_count ? 
                    <button onClick={(event) => this.changePage(event, 'previous') } disabled={this.state.loading}>Previous</button> : undefined}
                <button onClick={(event) => this.changePage(event, 'next')} disabled={this.state.loading}>Next</button>  
                <p>{this.state.error_msg}</p> 
            </div>
        )
    }
}

export default Leaderboard;
