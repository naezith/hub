import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Leaderboard from './components/Leaderboard';
import PlayerProfile from './components/PlayerProfile';

ReactDOM.render(

<Router>
    <div>
        <App />

        <center>
        <Route exact path='/' component={Leaderboard}/>
        <Route path='/global' component={Leaderboard}/>
        <Route path='/player/:player_id' component={PlayerProfile}/>
        </center>
    </div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
