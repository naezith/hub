import React, { Component } from 'react'

import { Players } from './render/pages/Players'

import { mutateState } from '../utility/common'
import { fetchPlayers } from '../utility/api'

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

  setPlayers = (username, steam_id) => {
    if((!username || username === '') &&
        (!steam_id || steam_id === '')) {
        this.setState({ error_msg: 'Both fields are empty.'})
        return
    }

    mutateState(this, fetchPlayers(username, steam_id))
  }

  render = () => (<Players  username={this.state.username} 
                            steam_id={this.state.steam_id}
                            players={this.state.players}
                            loading={this.state.loading} 
                            error_msg={this.state.error_msg}
                            searchButton={this.setPlayers} />)
}

export default PlayersPage
