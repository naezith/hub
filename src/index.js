import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import { Header } from './components/render/Header'
import LeaderboardPage from './components/LeaderboardPage'
import PlayerProfilePage from './components/PlayerProfilePage'
import PlayersPage from './components/PlayersPage'

import './index.css'

ReactDOM.render(

<Router>
    <div>
        <Header />

        <center>
        <Route exact path='/' component={LeaderboardPage}/>
        <Route path='/global-rankings' component={LeaderboardPage}/>
        <Route path='/players' component={PlayersPage}/>
        <Route path='/player/:player_id' component={PlayerProfilePage}/>
        </center>
    </div>
</Router>

, document.getElementById('root'))
registerServiceWorker()
