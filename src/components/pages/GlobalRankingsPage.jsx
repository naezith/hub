import React, { Component } from 'react'

import { GlobalRankings } from '../render/pages/GlobalRankings'
import { PageLayout } from '../render/PageLayout'

import { mutateState } from '../../utility/common'
import { fetchGlobalRankings, fetchGameInfo } from '../../utility/api'

var line_count = 10

export default class GlobalRankingsPage extends Component {
    constructor() {
        super()
        this.state = {
            player_count: undefined,
            valid_player_count: 0,

            start_rank: 0,
            lines: [],
            loading: 0,
            error_msg: undefined
        }
    }
    
    componentWillMount = () => mutateState(this, undefined,
        fetchGlobalRankings(this.state.start_rank, line_count), fetchGameInfo())

    changePage = (event, tag) => {
        event.preventDefault()
        mutateState(this, undefined, fetchGlobalRankings(
            this.state.start_rank + (tag === 'previous' ? -line_count : line_count), 
            line_count))
    }
    
    render = () =>  <PageLayout title='Global Rankings' error_msg={this.state.error_msg}>
                        <GlobalRankings {...this.state} changePage={this.changePage} />
                    </PageLayout>
}
