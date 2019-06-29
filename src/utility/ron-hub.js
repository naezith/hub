import { levels, chapters } from '../data/naezith'
import { calcScore } from '../utility/calculations'
import { compareAsc, compareDesc, combineCompares, renameKey } from '../utility/common'

export const getLevel = level_id => levels.find(l => l.id === level_id)
export const getChapterName = chapter => chapters[chapter]

export const renameProps = (arr, old, now) => arr.map(l => renameKey(l, old, now))

export const sortEntries = (entries, player_count) => entries
    .sort((a, b) => combineCompares(
                        compareAsc(getLevel(a.level_id).is_secret, getLevel(b.level_id).is_secret),
                        compareAsc(getLevel(a.level_id).chapter, getLevel(b.level_id).chapter),
                        compareDesc(calcScore(a.lb_rank, player_count), calcScore(b.lb_rank, player_count)),
                        compareDesc(a.update_date, b.update_date),
                    ))


export const sortWRs = levels => levels
    .sort((a, b) => combineCompares(
                        compareAsc(getLevel(a.level_id).is_secret, getLevel(b.level_id).is_secret),
                        compareAsc(getLevel(a.level_id).chapter, getLevel(b.level_id).chapter),
                        compareAsc(getLevel(a.level_id).name, getLevel(b.level_id).name)
                    ))

export const getMostWRs = wrs => {
    let players = []
    
    wrs.forEach(wr => {
        // Add if missing
        if(!players.find((p) => p.username === wr.username)){
            let player = { 
                ...wr,
                count: 0,
                secrets_count: 0
            }
            
            delete player.level_id
            delete player.time
            delete player.update_date
            
            players.push(player)
        }

        // Increment count by one
        var player = players.find(p => p.username === wr.username)
        player[getLevel(wr.level_id).is_secret ? 'secrets_count' : 'count'] += 1
    })

    // Sort by count
    players.sort((a, b) => combineCompares(compareDesc(a.count, b.count),
                                           compareDesc(a.secrets_count, b.secrets_count)
                                           ))

    // Assign ranks
    let rank = 0
    players.forEach(p => p.rank = ++rank)

    return players
}

export const appendScores = (entries, player_count) => {
    var newEntries = []
    
    entries.map(e => newEntries.push({...e, score: calcScore(e.lb_rank, player_count)}))

    return sortEntries(newEntries, player_count)
}