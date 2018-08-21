import React, { Component } from 'react'
import { ron_server } from '../utility/api'
import { querystringToJSON } from '../utility/common'

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
        let uri = user === undefined || user === ''
                     ? 'redirecting' : user === 'logout' ? 'logout' : 'return'

        let userJSON = user === undefined ? undefined : querystringToJSON(user)

        this.setState({ uri, user: userJSON })
    }

    componentDidMount() {
        // Log in
        if(this.state.uri === 'redirecting') {
            window.location = ron_server('/auth/steam')
        }
        // Log out
        else if(this.state.uri === 'logout') {
            localStorage.removeItem('user')
            window.location = '/'
        }
        // Big user data
        else {
            this.props.setUser(this.state.user)
            window.location = '/'
        }
    }
    
    render = () => (
        <h1>{this.state.uri === 'redirecting' ? 'Redirecting to Steam...' : 
                this.state.user ? 'Logging in...' : 
                    this.state.user === 'logout' ? 'Logging out...' : 'Failed to log in'}</h1>
    )
}