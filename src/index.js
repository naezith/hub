import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import PlayerProfile from './components/PlayerProfile';
import Players from './components/Players';

ReactDOM.render(

<Router>
    <div>
        <Header />

        <center>
        <Route exact path='/' component={Leaderboard}/>
        <Route path='/global-rankings' component={Leaderboard}/>
        <Route path='/players' component={Players}/>
        <Route path='/player/:player_id' component={PlayerProfile}/>
        </center>
    </div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
