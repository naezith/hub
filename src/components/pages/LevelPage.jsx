import React, { Component } from 'react'

import { Level } from '../render/pages/Level'
import { PageLayout } from '../render/PageLayout'

import { mutateState } from '../../utility/common'
import { fetchLeaderboard } from '../../utility/api'

var line_count = 10

export default class LevelPage extends Component {
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
    
    setLevelLeaderboard = (level_id, start_rank) => mutateState(this, undefined,
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

    render = () =>  <PageLayout error_msg={this.state.error_msg}>
                        <Level {...this.state} changePage={this.changePage} />
                    </PageLayout>
}
