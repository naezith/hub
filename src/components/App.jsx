import React, {Component} from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './render/Header'
import GlobalRankingsPage from './GlobalRankingsPage'
import PlayerProfilePage from './PlayerProfilePage'
import PlayersPage from './PlayersPage'
import LevelPage from './LevelPage'
import WorldRecordsPage from './WorldRecordsPage'
import SteamLoginHandler from './SteamLoginHandler'

import '../css/App.css'

export default class App extends Component {
  constructor() {
    super()
    
    this.state = { user: undefined } 

    this.setUser = this.setUser.bind(this)
  }

  setUser = user => this.setState({user})

  render = () => (
    <Router>
        <div>
            <Header user={this.state.user}/>

            <center>
            
            <Route exact path='/' component={GlobalRankingsPage}/>
            <Route path='/global-rankings' component={GlobalRankingsPage}/>
            <Route path='/world-records' component={WorldRecordsPage}/>
            <Route path='/players' component={PlayersPage}/>
            <Route path='/level/:level_id' component={LevelPage}/>
            <Route path='/player/:player_id' component={PlayerProfilePage}/>
            
            <Route exact path='/steam' component={SteamLoginHandler}/>
            <Route path='/steam/:user' render={(routeProps) => (
                    <SteamLoginHandler {...routeProps} setUser={this.setUser} />)} />
            
            </center>
        </div>
    </Router>
  )
}
