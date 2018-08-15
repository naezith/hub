import React from 'react'
import { levels, max_scores } from '../data/naezith.js'

export const getDominancePerc = (score, type='level', digits=2) => 
    parseFloat(100*score/max_scores[type]).toFixed(3) + '%'

export const calcScore = (rank, player_count, type='level') => 
    max_scores[type]*
    (0.25 + 0.75*(1.0 - Math.pow((Math.log(rank) / Math.log(player_count)), 2)))

export const getLevel = (level_id) => levels.find(l => l.id === level_id)

export const getRankImage = (name) => 
    ( <img className='rank-icon' src={'/img/ranks/' + name + '.png'} alt={name} /> )

export const formatRank = (rank, player_count) => rank + '/' + player_count

export const sortEntries = (entries) => entries
    .sort((a, b) => calcScore(a.eq_rank, a.lb_size) < calcScore(b.eq_rank, b.lb_size))
    //.sort((a, b) => getLevel(a.id).name > getLevel(b.id).name) 
    .sort((a, b) => getLevel(a.id).chapter > getLevel(b.id).chapter)
    .sort((a, b) => getLevel(a.id).is_secret > getLevel(b.id).is_secret) 

export const formatTime = (ms) => {
    var secs = Math.floor(ms / 1000);
    var minutes = Math.floor(secs / 60);
    var seconds = secs % 60;
    var milli = ms % 1000;

    if (seconds < 10) seconds = '0' + seconds;
    if(milli < 10) milli = '00' + milli;
    else if(milli < 100) milli = '0' + milli;

    return minutes + ':' + seconds + '.' + milli;
}