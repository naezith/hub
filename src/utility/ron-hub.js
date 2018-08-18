import { levels } from '../data/naezith'
import { calcScore } from '../utility/calculations'

export const getLevel = (level_id) => levels.find(l => l.id === level_id)

export const sortEntries = (entries) => entries
    .sort((a, b) => calcScore(a.eq_rank, a.lb_size) < calcScore(b.eq_rank, b.lb_size))
    .sort((a, b) => getLevel(a.id).chapter > getLevel(b.id).chapter)
    .sort((a, b) => getLevel(a.id).is_secret > getLevel(b.id).is_secret) 


export const sortWRs = (levels) => levels
    .sort((a, b) => getLevel(a.level_id).name > getLevel(b.level_id).name) 
    .sort((a, b) => getLevel(a.level_id).chapter > getLevel(b.level_id).chapter)
    .sort((a, b) => getLevel(a.level_id).is_secret > getLevel(b.level_id).is_secret) 

export const getMostWRs = (wrs) => {
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

            players.push(player)
        }

        // Increment count by one
        var player = players.find(p => p.username === wr.username)
        player[getLevel(wr.level_id).is_secret ? 'secrets_count' : 'count'] += 1
    })

    // Sort by count
    players.sort((a, b) => 
        a.count === b.count ?   a.secrets_count < b.secrets_count :    
                                a.count < b.count)

    // Assign ranks
    let rank = 0
    players.forEach(p => p.eq_rank = ++rank)

    return players
}