import React, { Component } from 'react'

import SteamProfile from './SteamProfile'
import RankIcon from './RankIcon'
import EntryLine from './EntryLine'

import { formatDominance, formatDate, formatRank } from '../utility/formatters'
import { calcDominance } from '../utility/calculations'
import { fetchFinishedLevels, fetchGlobalRank } from '../utility/api'
import { mutateState } from '../utility/common'
import { ranks } from '../data/naezith'

import '../css/PlayerProfile.css'

class PlayerProfile extends Component {
    constructor() {
        super()
        this.state = {
            player_id: 1,
            steam_id: undefined,
            register_date: undefined,
            username: '',
            badge: undefined,
            rank: undefined,
            global_score: undefined,
            player_count: undefined,
            entries: [],

            loading: 0,
            error_msg: undefined
        }
    }

    setPlayerProfile = (player_id) => mutateState(this, 
            fetchGlobalRank(player_id), fetchFinishedLevels(player_id))

    componentWillMount() {
        const { player_id } = this.props.match.params
        this.setPlayerProfile(player_id)
    }

    render() { 
        return(
            <div>
                <h1>Player Profile</h1>
                {this.state.loading > 0 ? <h1>Loading...</h1> : 
                    <div>
                        <div className='player-info'>
                            <RankIcon name={ranks[this.state.badge]} /><h2 className='same-line'>{this.state.username}</h2>
                            <p>Playing since: {formatDate(this.state.register_date)}</p>
                            <SteamProfile id={this.state.steam_id} inside={'Steam Profile'} />
                            <p>Rank: {formatRank(this.state.rank, this.state.player_count)}</p>
                            <p>Dominance: {formatDominance(calcDominance(this.state.global_score, 'global'))}</p>
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

export default PlayerProfile
