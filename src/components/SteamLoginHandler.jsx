import React, { Component } from 'react'
import { ron_server } from '../utility/api'
import { querystringToJSON } from '../utility/common'

import { Loading } from './render/Loading'

export default class SteamLoginHandler extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            uri: undefined,
            user: undefined
        }
    }

    componentWillMount() {
        let { user } = this.props.match.params
        let uri = user === undefined || user === '' ? 
                    'redirecting' : user === 'logout' ? 
                            'logout' : user.steamid && user.personaname ? 'success' : 'failed'

        let userJSON = user === undefined ? undefined : querystringToJSON(user)

        this.setState({ uri, user: userJSON })
    }

    componentDidMount() {
        localStorage.removeItem('user')

        // Log in
        if(this.state.uri === 'redirecting') {
            window.location = ron_server('/auth/steam')
        }
        // Success
        else if(this.state.uri === 'success'){
            this.props.setUser(this.state.user)
            window.location = '/'
        }
        // Log out
        else if(this.state.uri === 'logout') {
            window.location = '/'
        }
        // Failure
        else {
            window.location = '/'
        }
    }
    
    render = () => 
        <div>
            <h1>{this.state.uri === 'redirecting' ? 'Redirecting to Steam...' : 
                    this.state.uri === 'success' ? 'Logging in...' : 
                        this.state.uri === 'logout' ? 'Logging out...' : 'Failed to login...' }</h1>
            <Loading />
        </div>
}