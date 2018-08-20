import React, { Component } from 'react'

import { WorldRecords } from '../render/pages/WorldRecords'
import { PageLayout } from '../render/PageLayout'

import { fetchWRs } from '../../utility/api'
import { mutateState } from '../../utility/common'

export default class WorldRecordsPage extends Component {
    constructor() {
        super()
        this.state = {
            levels: [],
            most_wrs: [], 
            loading: 0,
            error_msg: undefined
        }
    }

    setWorldRecords = () => mutateState(this, undefined, fetchWRs())

    componentWillMount = () => this.setWorldRecords()
    
    render = () =>  <PageLayout title='World Records' error_msg={this.state.error_msg}>
                        <WorldRecords {...this.state} />
                    </PageLayout>
}