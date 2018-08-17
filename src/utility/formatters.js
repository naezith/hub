
export const formatDominance = (dominance, digits=3) => dominance.toFixed(digits) + '%'

export const formatDate = (date) => date.substr(0, 10)

export const formatRank = (rank, player_count) => rank + '/' + player_count

export const formatTime = (ms) => {
    var secs = Math.floor(ms / 1000)
    var minutes = Math.floor(secs / 60)
    var seconds = secs % 60
    var milli = ms % 1000

    if (seconds < 10) seconds = '0' + seconds
    if(milli < 10) milli = '00' + milli
    else if(milli < 100) milli = '0' + milli

    return minutes + ':' + seconds + '.' + milli
}


