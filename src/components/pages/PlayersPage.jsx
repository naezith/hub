import React, { Component } from 'react'

import { Players } from '../render/pages/Players'
import { PageLayout } from '../render/PageLayout'

import { mutateState } from '../../utility/common'
import { fetchPlayers } from '../../utility/api'

export default class PlayersPage extends Component {
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
    const min_username_chars = 3
    if((!username || username === '') &&
        (!steam_id || steam_id === '')) {
        this.setState({ error_msg: 'Both fields are empty.'})
    }
    else if(username && username.length > 0 && username.length < min_username_chars) {
        this.setState({ error_msg: 'Please enter at least ' + min_username_chars + ' characters.'})
    }
    else if(steam_id && steam_id.length > 0 && steam_id.length < 10) {
        this.setState({ error_msg: 'Please enter a valid SteamID64, or clear the field.'})
    }
    else mutateState(this, undefined, fetchPlayers(username, steam_id))
  }

  render = () =>  <PageLayout title='Search Players' error_msg={this.state.error_msg}>
                    <Players {...this.state} searchButton={this.setPlayers} />
                  </PageLayout>
}
