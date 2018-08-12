import React, { Component } from 'react';
import LeaderboardLine from "./LeaderboardLine.js";

var fetch = require('isomorphic-fetch');


var line_count = 10;

class Leaderboard extends Component {
    constructor() {
      super();
      
      this.state = { 
        start_rank: 0,
        lines: []
      }; 
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
      // Fetch Global Rankings
      ( async () => {
        const rawResponse = await fetch('/fetchGlobalRankings', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ start_rank: this.state.start_rank })
        });
        
        const content = await rawResponse.json();
      
        this.setState({
          ...this.state,
          lines: content.lb_data
        });
  
        console.log(content);
      })();
    }

    changePage(event, tag){
        event.preventDefault();
        this.setState({
            ...this.state,
            start_rank: this.state.start_rank + 
                (tag === 'previous' ? -line_count : line_count)
        })
    }

    render() { 
        return(
            <div>
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

                { this.state.start_rank >= line_count ? 
                    <button onClick={(event) => this.changePage(event, 'previous')}>Previous</button> : undefined }
                <button onClick={(event) => this.changePage(event, 'next')}>Next</button>  
            </div>
        )
    }
}

export default Leaderboard;
