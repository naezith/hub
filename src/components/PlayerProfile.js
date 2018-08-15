import React, { Component } from 'react';
import EntryLine from './EntryLine';
import { sortEntries, getRankImage, formatRank, getDominancePerc } from '../utility/Common';
import fetch from 'isomorphic-fetch';
import { ranks } from '../data/naezith';
import '../css/PlayerProfile.css';

class PlayerProfile extends Component {
    constructor() {
        super();
        this.state = {
            player_id: 1,
            username: '',
            badge: undefined,
            rank: undefined,
            global_score: undefined,
            player_count: undefined,
            entries: [],

            loading: 0,
            error_msg: undefined
        };
    }

    componentWillMount() {
        const { player_id } = this.props.match.params;
        this.fetchPlayerProfile(player_id);
    }

    fetchPlayerProfile(req_player_id) {
        // Fetch Player Info
        (async () => {
            this.setState({ loading: this.state.loading + 1 });

            const rawResponse = await fetch('/getGlobalRank', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player_id: req_player_id })
            });

            var success = true;
            var content = await rawResponse.json().catch((e) => { 
                console.log('Fetched data is corrupted, probably server is down', e); 
                success = false; 
            });

            content = content.lb_data[0];

            if(!success || !content) 
                this.setState({ 
                    loading: this.state.loading - 1, 
                    error_msg: 'The game server is down'
                });
            else {
                this.setState({
                    player_id: req_player_id,
                    username: content.username,
                    badge: content.badge,
                    rank: content.eq_rank,
                    global_score: content.global_score,
                    player_count: content.player_count,
                    loading: this.state.loading - 1,
                    error_msg: undefined
                });
            }
            console.log(content);
        })();



        // Fetch Player Levels
        (async () => {
            this.setState({ loading: this.state.loading + 1 });
            
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
                    loading: this.state.loading - 1, 
                    error_msg: 'The game server is down'
                });
            else 
                this.setState({
                    player_id: req_player_id,
                    entries: sortEntries(content.data) || [],
                    loading: this.state.loading - 1,
                    error_msg: undefined
                });
        })();
    }

    render() { 
        return(
            <div>
                <div className='player-info'>
                    {getRankImage(ranks[this.state.badge])} <h2 className='same-line'>{this.state.username}</h2>
                    <p>Rank: {formatRank(this.state.rank, this.state.player_count)}</p>
                    <p>Dominance: {getDominancePerc(this.state.global_score, 'global')}</p>
                </div>

                {this.state.loading > 0 ? 'LOADING...' : 
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
