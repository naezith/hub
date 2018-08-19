import React, { Component } from 'react'
import querystring from 'query-string'

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

        let uri = user === undefined ? 'redirecting' : 
                    user === 'logout' ? 'logout' : 'return'
        this.setState({ uri, user: querystring.parse(user) })
    }

    componentDidMount() {
        // Log in
        if(this.state.uri === 'redirecting') {
            window.location = 'http://localhost/auth/steam'
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