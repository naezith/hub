import React, { useState } from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import { Header } from './render/Header'
import { Footer } from './render/Footer'
import GlobalRankingsPage from './pages/GlobalRankingsPage'
import PersonalBestsPage from './pages/PersonalBestsPage'
import PlayerProfilePage from './pages/PlayerProfilePage'
import PlayersPage from './pages/PlayersPage'
import LevelPage from './pages/LevelPage'
import WorldRecordsPage from './pages/WorldRecordsPage'
import SteamLoginHandler from './SteamLoginHandler'

import '../css/App.css'

const App = () => {
  var cachedUser = JSON.parse(localStorage.getItem('user'))

  const [state, setState] = useState({
    user: cachedUser === null ? undefined : cachedUser
  })

  const setUser = (user) => {
    setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <Router>
      <div className='router-div'>
        <Header user={state.user} />

        <main>
          <Route exact path='/' component={GlobalRankingsPage} />
          <Route path='/global-rankings' component={GlobalRankingsPage} />
          <Route path='/world-records' component={WorldRecordsPage} />
          <Route path='/personal-bests' component={PersonalBestsPage} />
          <Route path='/players' component={PlayersPage} />
          <Route path='/level/:level_id' component={LevelPage} />
          <Route path='/player/:player_id' component={PlayerProfilePage} />

          <Route exact path='/steam' component={SteamLoginHandler} />
          <Route
            path='/steam/:user'
            render={(routeProps) => (
              <SteamLoginHandler {...routeProps} setUser={setUser} />
            )}
          />
        </main>

        <Footer user={state.user} />
      </div>
    </Router>
  )
}

export default App
