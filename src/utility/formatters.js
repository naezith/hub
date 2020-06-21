import { daysSince, secondsSince } from './common'

export const formatDominance = (dominance, digits=3) => dominance.toFixed(digits) + '%'

export const prettifyDate = date => {
    date = new Date(date);
    let pad = (n) => n < 10 ? "0" + n : n
    return pad(date.getDate()) + '/' + pad(date.getMonth() + 1) + '/' + date.getFullYear()
}

export const formatDate = date => {
    const days = daysSince(date)

    const threshold_match = [
       [365,  'year', 'years']
      ,[ 30, 'month', 'months']
      //,[  7, 'week', 'weeks']
      ,[  1,   'day', 'days']
    ].find( ([threshold]) => days >= threshold )

    if(!threshold_match)
      return 'Today'

    const [threshold, singular, plural] = threshold_match
    const match_value = Math.floor(days/threshold)
    return match_value + ' ' + (match_value === 1 ? singular : plural) + ' ago'
}

export const formatDateRecent = date => {
    const seconds = secondsSince(date)

    const threshold_match = [
       [60*60,   'hour', 'hours']
      ,[   60, 'minute', 'minutes']
      ,[    1, 'second', 'seconds']
    ].find( ([threshold,,]) => seconds >= threshold )

    if(!threshold_match)
      return formatDate(date)

    const [threshold, singular, plural] = threshold_match
    const match_value = Math.floor(seconds/threshold)
    return match_value + ' ' + (match_value === 1 ? singular : plural) + ' ago'
}

export const formatRank = (rank, player_count) => rank + ' / ' + player_count

export const formatTime = ms => {
    var secs = Math.floor(ms / 1000)
    var minutes = Math.floor(secs / 60)
    var seconds = secs % 60
    var milli = ms % 1000

    seconds = (''+seconds).padStart(2, '0')
    milli = (''+milli).padStart(3, '0')

    return minutes + ':' + seconds + '.' + milli
}

export const formatTimeSavings = ms => {
    const secs = Math.floor(ms / 1000)

    const hours = Math.floor(secs / 60 / 60 )
    const minutes = Math.floor(secs / 60)
    const seconds = secs % 60

    const milli = (''+ms % 1000).padStart(3, '0')

    const str_parts = []
    hours && str_parts.push(hours + 'h')
    minutes && str_parts.push(minutes + 'm')
    str_parts.push(seconds + '.' + milli + 's')

    return str_parts.join(' ')
}

