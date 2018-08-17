import React, { Component } from 'react'

import { WorldRecords } from "./render/main/WorldRecords"

import { fetchWRs } from '../utility/api'
import { mutateState } from '../utility/common'

class WorldRecordsPage extends Component {
    constructor() {
        super()
        this.state = {
            levels: [],
            loading: 0,
            error_msg: undefined
        }
    }

    setWorldRecords = () => mutateState(this, fetchWRs())

    componentWillMount= () => this.setWorldRecords()
    
    render = () =><WorldRecords levels={this.state.levels}
                                loading={this.state.loading} 
                                error_msg={this.state.error_msg} />
}

export default WorldRecordsPage
