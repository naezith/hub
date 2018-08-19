import React, { Component } from 'react'
import { steamLogin, steamLoginReturn } from '../utility/steamapi'
import querystring from 'query-string'

export default class SteamLoginHandler extends Component {
    constructor() {
        super()
        this.state = {
            uri: undefined,
            user: undefined
        }
    }

    componentWillMount() {
        let { user } = this.props.match.params
        console.log('Login handler: ', user)

        let uri = user === undefined ? 'redirecting' : 'return'
        this.setState({ uri, user: querystring.parse(user) })
    }

    componentDidMount() {
        if(this.state.uri === 'redirecting') steamLogin(this.props.history) 
        else steamLoginReturn(this.state.user)
    }
    
    render = () => (
        <h1>{this.state.uri === 'redirecting' ? 'Redirecting to Steam' : 'Logging in'}</h1>
    )
}