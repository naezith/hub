import React, { Component } from 'react'

import { Leaderboard } from "./render/Leaderboard"

import { mutateState } from '../utility/common'
import { fetchLeaderboard } from '../utility/api'
import { getChapterName } from '../utility/ron-hub';

var line_count = 20

class GlobalRankingsPage extends Component {
    constructor() {
        super()
        this.state = {
            level_id: undefined,
            level: undefined,
            lb_size: 0,
            start_rank: 0,
            lines: [],

            loading: 0,
            error_msg: undefined
        }
    }
    
    setLevelLeaderboard = (level_id, start_rank) => mutateState(this, 
        fetchLeaderboard(level_id, start_rank, line_count))

    componentWillMount = () => {
        let { level_id } = this.props.match.params

        level_id = parseFloat(level_id)

        this.setLevelLeaderboard(level_id, this.state.start_rank)
    }
    
    changePage = (event, tag) => {
        event.preventDefault()

        this.setLevelLeaderboard(this.state.level_id, this.state.start_rank + 
            (tag === 'previous' ? -line_count : line_count))
    }

    render = () => (
        <div>
            {this.state.level ? 
            <div>
                <h1>{this.state.level.name}</h1>
                <h3>{getChapterName(this.state.level.chapter)}</h3>
                <h4>{this.state.level.is_secret ? '(Secret)': undefined}</h4>
                <h2>Players: {this.state.lb_size}</h2>
            </div> : undefined}
        { this.state.loading > 0 ? <h1>Loading...</h1> :
        
            <div>
                <Leaderboard    start_rank={this.state.start_rank} 
                                lines={this.state.lines} 
                                loading={this.state.loading} 
                                changePage={this.changePage} />
            </div>}

        <p>{this.state.error_msg}</p> 
        </div>
    )
}

export default GlobalRankingsPage
