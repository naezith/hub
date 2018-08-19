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

        let uri = user === undefined ? 'redirecting' : 'return'
        this.setState({ uri, user: querystring.parse(user) })
    }

    componentDidMount() {
        if(this.state.uri === 'redirecting') {
            window.location = 'http://localhost/auth/steam'
        }
        else {
            this.props.setUser(this.state.user)
            //window.location = '/'
        }
    }
    
    render = () => (
        <h1>{this.state.uri === 'redirecting' ? 'Redirecting to Steam' : 'Logging in'}</h1>
    )
}