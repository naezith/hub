import React, { Component } from 'react';
import EntryLine from './EntryLine';
import { sortEntries } from '../utility/Common';
import fetch from 'isomorphic-fetch';

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

    render() { 
        return(
            <div>
                <h1>Player</h1>
                {this.state.loading ? 'LOADING...' : 
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
                }

                <p>{this.state.error_msg}</p> 
            </div>
        )
    }
}

export default PlayerProfile;
