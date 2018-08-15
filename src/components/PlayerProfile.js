import React, { Component } from 'react';
import EntryLine from './EntryLine';
import { sortEntries } from '../utility/Common'

var fetch = require('isomorphic-fetch');

class PlayerProfile extends Component {
    constructor() {
        super();
        this.state = {
            player_id: 1,
            entries: [],
            secrets: [],
            loading: true,
            error_msg: undefined
        };
    }

    componentWillMount() {
        const { player_id } = this.props.match.params;
        this.fetchPlayerProfile(player_id);
    }

    fetchPlayerProfile(req_player_id) {
        // Fetch Player Profile
        ( async () => {
            const rawResponse = await fetch('/fetchFinishedLevels', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player_id: req_player_id })
            });

            var success = true;
            const content = await rawResponse.json().catch((e) => { 
                console.log('Fetched data is corrupted, probably server is down', e); 
                success = false; 
            });

            if(!success || !content || !content.data) 
                this.setState({ 
                    loading: false, 
                    error_msg: 'The game server is down'
                });
            else 
                this.setState({
                    player_id: req_player_id,
                    entries: sortEntries(content.data) || [],
                    secrets: content.secrets || [],
                    loading: false,
                    error_msg: undefined
                });
            console.log(content);
        })();
    }

    changePlayer(event, tag){
        event.preventDefault();
        this.setState({ loading: true });

        this.fetchPlayerProfile(605 + 400*Math.random());
    }

    render() { 
        return(
            <div>
                <h1>Player</h1>
                <table className="Leaderboard">
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Time</th>
                            <th>Mastery Time</th>
                            <th>Rank</th>
                            <th>Dominance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.entries.map((l, i) => 
                                <EntryLine key={i} {...l} />
                            )
                        }
                    </tbody>
                </table>

                <button onClick={(event) => this.changePlayer(event)} disabled={this.state.loading}>Next</button>  
                <p>{this.state.error_msg}</p> 
            </div>
        )
    }
}

export default PlayerProfile;
