import React, { Component } from 'react'

import { PlayerProfile } from '../render/pages/PlayerProfile'
import { PageLayout } from '../render/PageLayout'

import { fetchFinishedLevels, fetchGlobalRank } from '../../utility/api'
import { mutateState } from '../../utility/common'
import { appendScores } from '../../utility/ron-hub'

export default class PlayerProfilePage extends Component {
    constructor() {
        super()
        this.state = {
            player_id: 1,
            steam_id: undefined,
            steam_info: undefined,
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

        this.calculateScores = this.calculateScores.bind(this)
    }

    calculateScores = () => 
            this.setState({ entries: appendScores(this.state.entries, this.state.player_count) })
    
    setPlayerProfile = (player_id) => mutateState(this, this.calculateScores,
            fetchGlobalRank(player_id), fetchFinishedLevels(player_id, this.state.player_count))

    componentWillMount() {
        let { player_id } = this.props.match.params
        
        this.setPlayerProfile(player_id)
    }
    
    render = () =>  <PageLayout title='Player Profile' error_msg={this.state.error_msg}>
                        <PlayerProfile {...this.state} />
                    </PageLayout>
}
