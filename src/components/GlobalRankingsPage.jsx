import React, { Component } from 'react'

import { GlobalRankings } from './render/pages/GlobalRankings'

import { mutateState } from '../utility/common'
import { fetchGlobalRankings, fetchGameInfo } from '../utility/api'

var line_count = 10

export default class GlobalRankingsPage extends Component {
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
    
    render = () => (<GlobalRankings player_count={this.state.player_count} 
                                    start_rank={this.state.start_rank}
                                    lines={this.state.lines}
                                    loading={this.state.loading} 
                                    error_msg={this.state.error_msg}
                                    changePage={this.changePage} />)
}
