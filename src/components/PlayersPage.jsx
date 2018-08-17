import React, { Component } from 'react'

import { Players } from './render/main/Players'

import { startLoading, fetchData } from '../utility/common'

class PlayersPage extends Component {
  constructor() {
    super()
    
    this.state = {
        username: undefined,
        steam_id: undefined,
        players: [],

        loading: 0,
        error_msg: undefined
    } 
  }
  
  searchButton = (username, steam_id) => {
    this.fetchPlayers(username, steam_id)
  }
    
  fetchPlayers(req_username, req_steam_id) {
    if((!req_username || req_username === '') &&
        (!req_steam_id || req_steam_id === '')) {
        this.setState({ error_msg: 'Both fields are empty.'})
        return
    }

    startLoading(this)
    fetchData('/fetchPlayers', { username: req_username, steam_id: req_steam_id })().then((content) => {
        // Set objects accordingly
        if(content.data) {
            content.players = content.data.sort((a, b) => a.global_score < b.global_score)
            delete content.data
            content.username = req_username
            content.steam_id = req_steam_id
            content.loading = this.state.loading - 1
        }
        
        this.setState(content)
    })
  }

  render = () => (<Players  username={this.state.username} 
                            steam_id={this.state.steam_id}
                            players={this.state.players}
                            loading={this.state.loading} 
                            error_msg={this.state.error_msg}
                            searchButton={this.searchButton} />)
}

export default PlayersPage
