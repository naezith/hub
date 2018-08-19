import React, { Component } from 'react'

import { PlayerProfile } from "./render/pages/PlayerProfile"

import { fetchFinishedLevels, fetchGlobalRank } from '../utility/api'
import { mutateState } from '../utility/common'

import '../css/PlayerProfile.css'

export default class PlayerProfilePage extends Component {
    constructor() {
        super()
        this.state = {
            player_id: 1,
            steam_id: undefined,
            register_date: undefined,
            username: '',
            badge: undefined,
            rank: undefined,
            score: undefined,
            player_count: undefined,
            entries: [],

            loading: 0,
            error_msg: undefined
        }
    }

    setPlayerProfile = (player_id) => mutateState(this, 
            fetchGlobalRank(player_id), fetchFinishedLevels(player_id))

    componentWillMount() {
        let { player_id } = this.props.match.params
        
        this.setPlayerProfile(player_id)
    }
    
    render = () => <PlayerProfile   username={this.state.username} 
                                    entries={this.state.entries} 
                                    player_count={this.state.player_count} 
                                    score={this.state.score} 
                                    register_date={this.state.register_date} 
                                    rank={this.state.rank} 
                                    badge={this.state.badge} 
                                    steam_id={this.state.steam_id} 
                                    loading={this.state.loading} 
                                    error_msg={this.state.error_msg} />
}
