import React, { Component } from 'react'

import { PlayersLine } from './render/PlayersLine'

import { startLoading, fetchData } from '../utility/common'

class Players extends Component {
  constructor() {
    super()
    
    this.state = {
        username: undefined,
        steam_id: undefined,
        players: [],

        loading: 0,
        error_msg: undefined
    } 

    this.searchButton = this.searchButton.bind(this)
  }
  
  searchButton(e) {
    e.preventDefault()
    this.fetchPlayers(this.refs.username.value, this.refs.steam_id.value)
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

  render() {
    return (
      <div>
        <h1>Search Players</h1>
        {this.state.loading > 0 ? <h1>Loading...</h1> : 
            <div>
                <p>Enter in-game player name <b>or </b> 
                    SteamID64 (can be found on <a href='https://steamrep.com/' target='_blank' rel='noopener noreferrer'>SteamRep</a>)
                </p>
                <form onSubmit={this.searchButton} className='search-player-form'>
                    <input id='username' ref='username' type='text' defaultValue={this.state.username} placeholder="In-game player name"/>
                    <input id='steam_id' ref='steam_id' type='text' defaultValue={this.state.steam_id} placeholder="SteamID64"/>
                    <button>Search</button>
                </form>

                {!this.state.username && !this.state.steam_id ? undefined : 
                    this.state.players.length === 0 ? <h1>There is no such player</h1> :
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Dominance</th>
                                <th>Register Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map((l, i) => 
                                    <PlayersLine key={i} {...l} />
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
        }
        <p>{this.state.error_msg}</p> 
      </div>
    )
  }
}

export default Players
