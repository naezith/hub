import React, {Component} from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import { Header } from './render/Header'
import { Footer } from './render/Footer'
import GlobalRankingsPage from './pages/GlobalRankingsPage'
import PlayerProfilePage from './pages/PlayerProfilePage'
import PlayersPage from './pages/PlayersPage'
import LevelPage from './pages/LevelPage'
import WorldRecordsPage from './pages/WorldRecordsPage'
import SteamLoginHandler from './SteamLoginHandler'

import '../css/App.css'

export default class App extends Component {
  constructor() {
    super()

    var cachedUser = JSON.parse(localStorage.getItem('user'))
    this.state = { user: cachedUser === null ? undefined : cachedUser } 

    this.setUser = this.setUser.bind(this)
  }

  setUser = user => {
    this.setState({user})
    localStorage.setItem('user', JSON.stringify(user))
  }
  
  render = () => (
    <Router>
        <div className='router-div'>
            <Header user={this.state.user}/>

            <main>
              <Route exact path='/' component={GlobalRankingsPage}/>
              <Route path='/global-rankings' component={GlobalRankingsPage}/>
              <Route path='/world-records' component={WorldRecordsPage}/>
              <Route path='/players' component={PlayersPage}/>
              <Route path='/level/:level_id' component={LevelPage}/>
              <Route path='/player/:player_id' component={PlayerProfilePage}/>
              
              <Route exact path='/steam' component={SteamLoginHandler}/>
              <Route path='/steam/:user' render={(routeProps) => (
                      <SteamLoginHandler {...routeProps} setUser={this.setUser} />)} />
            </main>

            <Footer user={this.state.user}/>
        </div>
    </Router>
  )
}
