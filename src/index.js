import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import { Header } from './components/render/Header'
import GlobalRankingsPage from './components/GlobalRankingsPage'
import PlayerProfilePage from './components/PlayerProfilePage'
import PlayersPage from './components/PlayersPage'
import LevelPage from './components/LevelPage'
import WorldRecordsPage from './components/WorldRecordsPage'

import './index.css'

ReactDOM.render(

<Router>
    <div>
        <Header />

        <center>
        <Route exact path='/' component={GlobalRankingsPage}/>
        <Route path='/global-rankings' component={GlobalRankingsPage}/>
        <Route path='/world-records' component={WorldRecordsPage}/>
        <Route path='/players' component={PlayersPage}/>
        <Route path='/level/:level_id' component={LevelPage}/>
        <Route path='/player/:player_id' component={PlayerProfilePage}/>
        </center>
    </div>
</Router>

, document.getElementById('root'))
registerServiceWorker()
