import React, { Component } from 'react'

import { Leaderboard } from "./render/main/Leaderboard"

import { mutateState } from '../utility/common'
import { fetchGlobalRankings } from '../utility/api'

var line_count = 20

class LeaderboardPage extends Component {
    constructor() {
        super()
        this.state = {
            start_rank: 0,
            lines: [],
            loading: 0,
            error_msg: undefined
        }
    }
    
    setGlobalRankings = start_rank => mutateState(this, fetchGlobalRankings(start_rank, line_count))

    componentWillMount = () => this.setGlobalRankings(this.state.start_rank)

    changePage = (event, tag) => {
        event.preventDefault()

        this.setGlobalRankings(this.state.start_rank + 
            (tag === 'previous' ? -line_count : line_count))
    }

    render = () => <Leaderboard start_rank={this.state.start_rank} 
                                lines={this.state.lines} 
                                loading={this.state.loading} 
                                error_msg={this.state.error_msg} 
                                changePage={this.changePage} />
}

export default LeaderboardPage
