import React, { Component } from 'react'

import { Leaderboard } from "./render/Leaderboard"

import { mutateState } from '../utility/common'
import { fetchGlobalRankings, fetchGameInfo } from '../utility/api'

var line_count = 20

class GlobalRankingsPage extends Component {
    constructor() {
        super()
        this.state = {
            player_count: 0,
            valid_player_count: 0,

            start_rank: 0,
            lines: [],
            loading: 0,
            error_msg: undefined
        }
    }
    
    setGlobalRankings = start_rank => mutateState(this, 
                    fetchGlobalRankings(start_rank, line_count), fetchGameInfo())

    componentWillMount = () => this.setGlobalRankings(this.state.start_rank)

    changePage = (event, tag) => {
        event.preventDefault()

        this.setGlobalRankings(this.state.start_rank + 
            (tag === 'previous' ? -line_count : line_count))
    }

    render = () => (
        <div>
        <h1>Global Rankings</h1>
        { this.state.loading > 0 ? <h1>Loading...</h1> :
        
        <div>
            <h2>Players: {this.state.player_count}</h2>
            <Leaderboard    start_rank={this.state.start_rank} 
                            lines={this.state.lines} 
                            loading={this.state.loading} 
                            changePage={this.changePage} />
        </div>
        }

        <p>{this.state.error_msg}</p> 
        </div>
    )
}

export default GlobalRankingsPage
