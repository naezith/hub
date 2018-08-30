import { daysSince } from './common'

export const formatDominance = (dominance, digits=3) => dominance.toFixed(digits) + '%'

export const prettifyDate = date => {
    date = new Date(date);
    let pad = (n) => n < 10 ? "0" + n : n
    return pad(date.getDate()) + '/' + pad(date.getMonth() + 1) + '/' + date.getFullYear()
}

export const formatDate = date => {
    let str, days = daysSince(date) 

    if(days === 0) return 'Today'
    else if(days >= 365) {
        var years = Math.floor(days/365)
        str = years + (years === 1 ? ' year' : ' years')
    }
    else if(days >= 30) {
        var months = Math.floor(days/30)
        str = months + (months === 1 ? ' month' : ' months')
    }
    else 
        str = days + (days === 1 ? ' day' : ' days')
    
    return str + ' ago'
}

export const formatRank = (rank, player_count) => rank + ' / ' + player_count

export const formatTime = ms => {
    var secs = Math.floor(ms / 1000)
    var minutes = Math.floor(secs / 60)
    var seconds = secs % 60
    var milli = ms % 1000

    if (seconds < 10) seconds = '0' + seconds
    if(milli < 10) milli = '00' + milli
    else if(milli < 100) milli = '0' + milli

    return minutes + ':' + seconds + '.' + milli
}


