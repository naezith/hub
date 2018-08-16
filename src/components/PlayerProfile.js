import React, { Component } from 'react';
import EntryLine from './EntryLine';
import { sortEntries, getRankImage, formatRank, getDominancePerc, 
    fetchData, startLoading, renameKey } from '../utility/Common';
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
        startLoading(this, 2);
        
        // Fetch Player Info
        fetchData('/getGlobalRank', { player_id: req_player_id })().then((content) => {
            // Set objects accordingly
            if(content.lb_data) {
                content = content.lb_data[0];
                renameKey(content, 'eq_rank', 'rank');
                content.player_id = req_player_id;
            }

            content.loading = this.state.loading - 1;
            this.setState(content);
        });

        // Fetch Player Entries
        fetchData('/fetchFinishedLevels', { player_id: req_player_id })().then((content) => {
            // Set objects accordingly
            if(content.data) {
                renameKey(content, 'data', 'entries');
                content.entries = sortEntries(content.entries);
                content.player_id = req_player_id;
            }
            
            content.loading = this.state.loading - 1;
            this.setState(content);
        });
    }

    render() { 
        return(
            <div>
                <h1>Player Profile</h1>
                {this.state.loading > 0 ? <h1>Loading...</h1> : 
                    <div>
                        <div className='player-info'>
                            {getRankImage(ranks[this.state.badge])} <h2 className='same-line'>{this.state.username}</h2>
                            <p>Rank: {formatRank(this.state.rank, this.state.player_count)}</p>
                            <p>Dominance: {getDominancePerc(this.state.global_score, 'global')}</p>
                        </div>

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
                    </div>
                }
                <p>{this.state.error_msg}</p> 
            </div>
        )
    }
}

export default PlayerProfile;
